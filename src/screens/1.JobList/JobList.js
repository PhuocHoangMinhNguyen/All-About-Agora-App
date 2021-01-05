import React from "react";
import { Text, StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

class JobList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: (
            <View>
                <Text style={{ color: 'white', fontSize: 20, marginBottom: 5 }}>Job List</Text>
                <TouchableOpacity style={styles.headerHeight} onPress={() => navigation.navigate("Search")}>
                    <Text>Start your job search</Text>
                    <Ionicons name="search" size={24} />
                </TouchableOpacity>
            </View>
        ),
        headerStyle: { backgroundColor: '#001F4C', height: 120 },
        headerTitleStyle: { color: 'white' },
    });

    state = {
        jobs: []
    };

    unsubscribe = null;

    componentDidMount() {
        this.unsubscribe = firestore().collection("jobs")
            .where('status', '==', 'published')
            .onSnapshot(querySnapshot => {
                let temp = [];
                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.data().saved.includes((auth().currentUser || {}).uid)) {
                        if (documentSnapshot.data().applied.includes((auth().currentUser || {}).uid)) {
                            temp.push({
                                ...documentSnapshot.data(),
                                key: documentSnapshot.id,
                                saved: true,
                                applied: true
                            });
                        } else {
                            temp.push({
                                ...documentSnapshot.data(),
                                key: documentSnapshot.id,
                                saved: true,
                                applied: false
                            });
                        }
                    } else {
                        if (documentSnapshot.data().applied.includes((auth().currentUser || {}).uid)) {
                            temp.push({
                                ...documentSnapshot.data(),
                                key: documentSnapshot.id,
                                saved: false,
                                applied: true
                            });
                        } else {
                            temp.push({
                                ...documentSnapshot.data(),
                                key: documentSnapshot.id,
                                saved: false,
                                applied: false
                            });
                        }
                    }
                });
                let params = this.props.navigation.state.params
                if (params) {
                    temp.forEach(t => {
                        if (params.keywords != '' && t.jobTitle.includes(params.keywords)) {

                        }
                    });
                } else {
                    this.setState({ jobs: temp });
                }
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
            <TouchableOpacity style={styles.item}
                onPress={() => this.props.navigation.navigate("JobDetails", dataInfor)}>
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
    };

    render() {
        const { jobs } = this.state;
        if (jobs.length == 0) {
            return (
                <View style={styles.container}>
                    <Text>Job Accepted</Text>
                </View>
            )
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
    },
    headerHeight: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: 300
    },
});

export default JobList