import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

class JobAccepted extends React.Component {
    state = {
        jobs: []
    };

    unsubscribe = null;

    componentDidMount() {
        this.unsubscribe = firestore().collection("jobs").onSnapshot(querySnapshot => {
            let temp = [];
            querySnapshot.forEach(documentSnapshot => {
                temp.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id
                });
            });
            this.setState({ jobs: temp });
        });
    };

    componentWillUnmount() {
        this.unsubscribe();
    };

    renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("EditExperience", dataInfor)}>

            </TouchableOpacity>
        )
    };

    render() {
        return <Text>Job Accepted</Text>
    };
};

const styles = StyleSheet.create({

});

export default JobAccepted