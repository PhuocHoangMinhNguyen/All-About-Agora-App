import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

class Skills extends React.Component {
    state = {
        skills: null
    };

    unsubscribe = null

    componentDidMount() {
        this.unsubscribe = firestore().collection("skills").doc((auth().currentUser || {}).uid)
            .onSnapshot((documentSnapshot) => {
                this.setState({ skills: documentSnapshot.data().skills });
            });
    };

    componentWillUnmount() {
        this.unsubscribe();
    };

    renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={{ color: 'white', alignSelf: "center", flex: 1, textAlign: "center", marginHorizontal: 10 }}>{item}</Text>
            </View>
        );
    };

    render() {
        const { skills } = this.state
        if (skills == null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Skills</Text>
                    <Text style={styles.body}>Let employers know how valuable you can be to them.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("EditSkills")}>
                        <Text style={{ color: 'white' }}>Add skills</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.header}>Skills</Text>
                        <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => this.props.navigation.navigate("EditSkills")}>
                            <Text style={{ color: "blue", fontWeight: "bold" }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList style={styles.list}
                        data={skills}
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
        minWidth: 100,
        height: 40,
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: "#003787",
        marginVertical: 5
    },
});

export default Skills