import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Toast from "react-native-simple-toast";

class EditSkills extends React.Component {
    state = {
        skills: [],
        addingSkill: ''
    };

    componentDidMount = async () => {
        const firebaseSkills = await firestore().collection("skills").doc((auth().currentUser || {}).uid).get();
        if (firebaseSkills.exists) {
            this.setState({ skills: firebaseSkills.data().skills });
        };
    };

    addSkill = () => {
        const { addingSkill, skills } = this.state
        if (addingSkill.trim() != '') {
            const tempArray = skills
            tempArray.push(addingSkill.trim())
            this.setState({
                addingSkill: '',
                skills: tempArray
            });
        };
    };

    deleteSkill(item) {
        const { skills } = this.state
        const tempArray = skills
        tempArray.forEach((temp, i) => {
            if (item == temp) {
                tempArray.splice(i, 1)
            }
        });
        this.setState({ skills: tempArray });
    };

    saveSkills = () => {
        firestore().collection("skills").doc((auth().currentUser || {}).uid).set(
            {
                skills: this.state.skills
            }, { merge: true }
        ).then(() => {
            this.props.navigation.goBack();
            Toast.show("Skills added");
        });
    };

    renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={{ color: 'white', alignSelf: "center", flex: 1, textAlign: "center", marginHorizontal: 10 }}>{item}</Text>
                <TouchableOpacity style={{ alignSelf: "center", marginRight: 10 }} onPress={() => this.deleteSkill(item)}>
                    <Ionicons name="close" size={20} color="white" />
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="close" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Add Skills</Text>
                    <TouchableOpacity onPress={this.saveSkills}>
                        <Ionicons name="save-sharp" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
                    <TextInput style={styles.input}
                        placeholder="Add skill"
                        onChangeText={addingSkill => this.setState({ addingSkill: addingSkill })}
                        value={this.state.addingSkill} />
                    <TouchableOpacity onPress={this.addSkill}>
                        <Ionicons name="add" size={32} />
                    </TouchableOpacity>
                </View>
                <FlatList style={styles.list}
                    data={this.state.skills}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    icons: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 24
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        flex: 1
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

export default EditSkills