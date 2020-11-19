import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';

class Experience extends React.Component {
    state = {
        roles: []
    };

    unsubscribe = null

    componentDidMount() {
        this.unsubscribe = firestore().collection("experience").where("userId", "==", (auth().currentUser || {}).uid)
            .onSnapshot(querySnapshot => {
                let temp = [];
                querySnapshot.forEach(documentSnapshot => {
                    temp.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id
                    });
                });
                this.setState({ roles: temp });
            });
    };

    componentWillUnmount() {
        this.unsubscribe();
    };

    deleteItem(item) {
        firestore().collection("experience").doc(item.key).delete()
            .then(() => {
                Toast.show("Role deleted");
            });
    };

    renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => this.props.navigation.navigate("EditExperience")}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.job}</Text>
                    <TouchableOpacity onPress={() => this.deleteItem(item)}>
                        <Ionicons name="close" size={20} />
                    </TouchableOpacity>
                </View>
                <Text>{item.company}</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text>{`${moment(item.startDate.toDate()).format('MMM Do YYYY')} - `}</Text>
                    {(item.endDate == null)
                        ? <Text>Present</Text>
                        : <Text>{moment(item.endDate.toDate()).format('MMM Do YYYY')}</Text>
                    }
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        const { roles } = this.state
        if (roles.length == 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Experience</Text>
                    <Text style={styles.body}>Highlight your experience to employers.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("AddExperience")}>
                        <Text style={{ color: 'white' }}>Add Experience</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.header}>Experience</Text>
                        <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => this.props.navigation.navigate("AddExperience")}>
                            <Text style={{ color: "blue", fontWeight: "bold" }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList style={styles.list}
                        data={roles}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            );
        }
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

export default Experience