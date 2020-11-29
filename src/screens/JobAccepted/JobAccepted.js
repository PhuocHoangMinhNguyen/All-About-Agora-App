import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

class JobAccepted extends React.Component {
    static navigationOptions = {
        title: <Text style={{ color: '#FFF' }}>Job List</Text>,
        headerStyle: { backgroundColor: '#001F4C' },
        headerTitleStyle: { color: 'white' },
    };

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
        let dataInfor = {

        }
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate("JobDetails", dataInfor)}>

            </TouchableOpacity>
        )
    };

    render() {
        const { jobs } = this.state;
        if (jobs.length == 0) {
            return <Text>Job Accepted</Text>
        } else {
            return (
                <View style={styles.container}>

                </View>
            )
        }
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default JobAccepted