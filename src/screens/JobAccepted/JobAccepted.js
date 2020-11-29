import React from "react";
import { Text, StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import firestore from "@react-native-firebase/firestore";
import moment from 'moment';

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
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => this.props.navigation.navigate("JobDetails", item)}>
                <Text style={styles.title}>{item.jobTitle}</Text>
                <Text>{item.businessName}</Text>
                <Text style={styles.createdAt}>{moment(item.createdAt.toDate()).fromNow()}</Text>
                <Text style={styles.workType}>{item.workType}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text>{item.jobSummary}</Text>
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
                    <FlatList style={styles.list}
                        data={jobs}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            )
        }
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    list: {
        // marginVertical: 10
    },
    item: {
        backgroundColor: "#c2f1ff",
        padding: 10,
        marginVertical: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    createdAt: {
        color: 'grey',
        marginBottom: 10
    },
    workType: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    location: {
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default JobAccepted