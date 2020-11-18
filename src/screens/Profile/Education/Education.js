import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { FlatList } from 'react-native-gesture-handler';

class Education extends React.Component {
    state = {
        qualifications: []
    };

    componentDidMount() {
        let temp = [];
        firestore().collection("education").where("userId", "==", (auth().currentUser || {}).uid)
            .onSnapshot(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    temp.push(documentSnapshot.data());
                });
                this.setState({ qualifications: temp })
            });
    };

    renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => this.props.navigation.navigate("EditEducation")}>
                <Text>{item.course}</Text>
                <Text>{item.institution}</Text>
                {(item.complete == true) ? <Text>Graduated</Text> : <Text>Graduating</Text>}
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
                    <Text style={styles.header}>Education</Text>
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
        padding: 20,
    },
    item: {

    },
});

export default Education