import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

class AppliedActivity extends React.Component {
    state = {
        appliedJobs: [],
    };

    unsubscribe = null;

    componentDidMount() {
        this.unsubscribe = firestore().collection("jobs").onSnapshot(querySnapshot => {
            let temp = [];
            querySnapshot.forEach(documentSnapshot => {
                if (documentSnapshot.data().applied.includes((auth().currentUser || {}).uid)) {
                    if (documentSnapshot.data().saved.includes((auth().currentUser || {}).uid)) {
                        temp.push({
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                            saved: true
                        });
                    } else {
                        temp.push({
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                            saved: false
                        });
                    }
                }
            });
            this.setState({ appliedJobs: temp });
        });
    };

    componentWillUnmount() {
        this.unsubscribe();
    };

    handleSave(item) {
        if (item.saved == true) {
            firestore().collection('jobs').doc(item.key).update({
                saved: firestore.FieldValue.arrayRemove((auth().currentUser || {}).uid)
            });
        } else {
            firestore().collection('jobs').doc(item.key).update({
                saved: firestore.FieldValue.arrayUnion((auth().currentUser || {}).uid)
            });
        }
    };

    renderItem = (item) => {
        let dataInfor = {
            ...item,
            createAt: item.createdAt.toDate()
        }
        return (
            <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("SavedJobDetails", dataInfor)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>{item.jobTitle}</Text>
                    <TouchableOpacity onPress={() => this.handleSave(item)}>
                        {item.saved == true
                            ? <Ionicons name="star" size={30} />
                            : <Ionicons name="star-outline" size={30} />
                        }
                    </TouchableOpacity>
                </View>
                <Text>{item.businessName}</Text>
                <Text style={styles.createdAt}>{moment(item.createdAt.toDate()).fromNow()}</Text>
                <Text style={styles.workType}>{item.workType}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text>{item.jobSummary}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { appliedJobs } = this.state
        if (appliedJobs.length == 0) {
            return (
                <View style={styles.container}>
                    <Text>Applied Activity</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <FlatList style={styles.list}
                        data={appliedJobs}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            )
        }
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
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

export default AppliedActivity