import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import Toast from 'react-native-simple-toast';

class AppliedJob extends React.Component {
    static navigationOptions = {
        title: <Text style={{ color: '#FFF' }}>Job Details</Text>,
        headerStyle: { backgroundColor: '#001F4C' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white'
    };

    state = {
        job: {},
        saved: false
    };

    componentDidMount = async () => {
        let params = this.props.navigation.state.params
        this.setState({ job: params });
    };

    handleSaveJob = () => {
        const { job } = this.state
        if (job.saved == false) {
            firestore().collection("jobs").doc(job.key).update({
                saved: firestore.FieldValue.arrayUnion((auth().currentUser || {}).uid)
            }).then(() => {
                this.setState({ job: { ...this.state.job, saved: true } });
                Toast.show('Job saved to My Activity');
            })
        } else {
            firestore().collection("jobs").doc(job.key).update({
                saved: firestore.FieldValue.arrayRemove((auth().currentUser || {}).uid)
            }).then(() => {
                this.setState({ job: { ...this.state.job, saved: false } });
                Toast.show('Job no longer saved');
            })
        }
    };

    handleApply = () => {
        this.props.navigation.navigate("SavedApplyStack", this.state.job);
    };

    render() {
        const { job } = this.state
        return (
            <View style={styles.container}>
                <ScrollView style={{ padding: 20 }}>
                    <View style={styles.zone}>
                        <Text style={styles.jobTitle}>{job.jobTitle}</Text>
                        <Text style={styles.businessName}>{job.businessName}</Text>
                        <Text style={styles.createAt}>{moment(job.createAt).fromNow()}</Text>
                    </View>
                    <View style={styles.zone}>
                        <Text style={styles.location}>{job.location}</Text>
                        <Text style={styles.workType}>{job.workType}</Text>
                    </View>
                    {job.business == ""
                        ? <View></View>
                        : <View>
                            <Text style={styles.businessTitle}>{`About ${job.businessName}`}</Text>
                            <Text style={styles.business}>{job.business}</Text>
                        </View>
                    }
                    <Text style={styles.tasksTitle}>{`Tasks & responsibilities`}</Text>
                    <Text style={styles.tasks}>{job.tasksResponsibilities}</Text>
                    <Text style={styles.qualificationsTitle}>{`Qualifications & experience`}</Text>
                    <Text style={styles.qualifications}>{job.qualificationsExperience}</Text>
                    {job.benefits == ''
                        ? <View></View>
                        : <View>
                            <Text style={styles.benefitsTitle}>Benefits</Text>
                            <Text style={styles.benefits}>{job.benefits}</Text>
                        </View>
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    zone: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    jobTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    businessName: {

    },
    createAt: {
        color: 'grey',
        marginBottom: 20
    },
    location: {
        fontWeight: 'bold',
        marginTop: 20
    },
    workType: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    businessTitle: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 15,
        marginBottom: 10
    },
    business: {
        marginBottom: 10
    },
    tasksTitle: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 15,
        marginBottom: 10
    },
    tasks: {
        marginBottom: 10
    },
    qualificationsTitle: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 15,
        marginBottom: 10
    },
    qualifications: {
        marginBottom: 10
    },
    benefitsTitle: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 15,
        marginBottom: 10
    },
    benefits: {
        marginBottom: 10
    },
    bottom: {
        flexDirection: 'row',
        marginVertical: 10
    },
});

export default AppliedJob;