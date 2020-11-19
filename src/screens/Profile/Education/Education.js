import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';

class Education extends React.Component {
    state = {
        qualifications: []
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
                Toast.show("Qualification deleted");
            });
    };

    renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => this.props.navigation.navigate("EditEducation")}>
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
        padding: 20,
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