import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import moment from 'moment';

class JobDetails extends React.Component {
    static navigationOptions = {
        title: <Text style={{ color: '#FFF' }}>Job Details</Text>,
        headerStyle: { backgroundColor: '#001F4C' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white'
    };

    state = {
        job: {}
    };

    componentDidMount() {
        let params = this.props.navigation.state.params
        this.setState({ job: params });
    };

    handleSaveJob = () => {

    }

    handleApply = () => {
        this.props.navigation.navigate("Apply1")
    }

    render() {
        const { job } = this.state
        console.log(moment(job.createAt));
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
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.saveJob} onPress={this.handleSaveJob}>
                        <Text style={{ color: "#001F4C" }}>Save job</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.apply} onPress={this.handleApply}>
                        <Text style={{ color: 'white' }}>Quick apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
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
    saveJob: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        flex: 1,
        borderColor: "#001F4C",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10
    },
    apply: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        flex: 1,
        backgroundColor: "#FF0046",
        borderRadius: 10,
        marginHorizontal: 10,
    }
});

export default JobDetails;