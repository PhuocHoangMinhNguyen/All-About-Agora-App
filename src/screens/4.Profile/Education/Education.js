import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import { ConfirmDialog } from 'react-native-simple-dialogs';

class Education extends React.Component {
    state = {
        qualifications: [],
        dialogVisible: false
    };

    unsubscribe = null

    componentDidMount() {
        this.unsubscribe = firestore().collection("education").where("userId", "==", (auth().currentUser || {}).uid)
            .onSnapshot(querySnapshot => {
                let temp = [];
                querySnapshot.forEach(documentSnapshot => {
                    temp.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id
                    });
                });
                this.setState({ qualifications: temp });
            });
    };

    componentWillUnmount() {
        this.unsubscribe();
    };

    deleteItem(item) {
        firestore().collection("education").doc(item.key).delete()
            .then(() => {
                this.setState({ dialogVisible: false });
                Toast.show("Qualification deleted");
            });
    };

    renderItem = (item) => {
        let dataInfor = {
            course: item.course,
            key: item.key,
            institution: item.institution,
            complete: item.complete,
            date: item.date.toDate(),
            highlights: item.highlights,
            userId: item.userId
        }
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => this.props.navigation.navigate("EditEducation", dataInfor)}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.course}</Text>
                    <TouchableOpacity onPress={() => this.deleteItem(item)}>
                        <Ionicons name="close" size={20} />
                    </TouchableOpacity>
                </View>
                <Text>{item.institution}</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    {(item.complete == true)
                        ? <Text>Graduated </Text>
                        : <Text>Graduating </Text>
                    }
                    {(item.date == null)
                        ? <Text></Text>
                        : <Text>{moment(item.date.toDate()).format('MMM Do YYYY')}</Text>
                    }
                </View>
                {/* <ConfirmDialog
                    visible={this.state.dialogVisible}
                    title="Alert"
                    message="Are you sure?"
                    onTouchOutside={() => this.setState({ dialogVisible: false })}
                    positiveButton={{
                        title: "YES",
                        onPress: () => { this.deleteItem(item) }
                    }}
                    negativeButton={{
                        title: "NO",
                        onPress: () => {
                            this.setState({ dialogVisible: false });
                            Toast.show("Your request is canceled !");
                        }
                    }}
                /> */}
            </TouchableOpacity>
        );
    };

    render() {
        const { qualifications } = this.state
        if (qualifications.length == 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Education</Text>
                    <Text style={styles.body}>Tell employers about your education.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("AddEducation")}>
                        <Text style={{ color: 'white' }}>Add qualification</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.header}>Education</Text>
                        <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => this.props.navigation.navigate("AddEducation")}>
                            <Text style={{ color: "blue", fontWeight: "bold" }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList style={styles.list}
                        data={qualifications}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            );
        };
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30
    },
    body: {
        color: 'grey',
        marginVertical: 18
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 40,
        backgroundColor: "#003787",
        borderRadius: 4,
        marginVertical: 12,
        marginEnd: 16
    },
    list: {
        marginVertical: 10
    },
    item: {
        backgroundColor: "#c2f1ff",
        padding: 10,
        marginVertical: 10
    },
});

export default Education