import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
import DatePicker from "@react-native-community/datetimepicker";
import moment from 'moment';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Toast from "react-native-simple-toast";

class EditExperience extends React.Component {
    state = {
        experience: {},
        showStartDate: false,
        showEndDate: false,
        startDateText: 'Start date',
        endDateText: 'End date',
    };

    componentDidMount() {
        let params = this.props.navigation.state.params
        this.setState({
            experience: params,
            startDateText: moment(params.startDate).format('MMM Do YYYY')
        });
        if (params.inRole == false) {
            this.setState({ endDateText: moment(params.endDate).format('MMM Do YYYY') })
        }
    };

    onStartChange = (event, selectedDate) => {
        const { startDate } = this.state.experience
        const currentDate = selectedDate || startDate
        this.setState({
            showStartDate: !this.state.showStartDate,
            experience: {
                ...this.state.experience,
                startDate: currentDate
            },
            startDateText: moment(currentDate).format('MMM Do YYYY'),
        });
    };

    onEndChange = (event, selectedDate) => {
        const { endDate } = this.state.experience
        const currentDate = selectedDate || endDate
        this.setState({
            showEndDate: !this.state.showEndDate,
            experience: {
                ...this.state.experience,
                endDate: currentDate
            },
            endDateText: moment(currentDate).format('MMM Do YYYY'),
        });
    };

    saveExperience = () => {
        const { job, company, description, inRole, startDate, endDate, key } = this.state.experience
        const { startDateText, endDateText } = this.state
        if (job.trim() == '') {
            Toast.show('Please enter job title');
        } else if (company.trim() == '') {
            Toast.show('Please enter company name');
        } else if (startDateText == 'Start date') {
            Toast.show('Please enter start date');
        } else if (startDate > Date.now()) {
            Toast.show('Start Date needs to be before today');
        } else if (inRole == false && endDateText == 'End date') {
            Toast.show('Please enter end date for completed role');
        } else if (endDate > Date.now()) {
            Toast.show('End Date needs to be before today');
        } else if (startDate > endDate) {
            Toast.show('End date has to be after start date');
        } else {
            if (inRole == true) {
                firestore().collection("experience").doc(key).set(
                    {
                        userId: (auth().currentUser || {}).uid,
                        job: job,
                        company: company,
                        description: description,
                        inRole: inRole,
                        startDate: startDate,
                        endDate: null
                    }, { merge: true }
                ).then(() => {
                    this.props.navigation.goBack();
                    Toast.show("Qualification added");
                });
            } else {
                firestore().collection("experience").doc(key).set(
                    {
                        userId: (auth().currentUser || {}).uid,
                        job: job,
                        company: company,
                        description: description,
                        inRole: inRole,
                        startDate: startDate,
                        endDate: endDate
                    }, { merge: true }
                ).then(() => {
                    this.props.navigation.goBack();
                    Toast.show("Qualification added");
                });
            }
        }
    };

    render() {
        const { company, description, endDate, inRole, job, startDate } = this.state.experience
        const { showStartDate, showEndDate, startDateText, endDateText } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="close" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Add role</Text>
                    <TouchableOpacity onPress={this.saveExperience}>
                        <Ionicons name="save-sharp" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Job title"
                        onChangeText={job => this.setState({ experience: { ...this.state.experience, job } })}
                        value={job} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Company name"
                        onChangeText={company => this.setState({ experience: { ...this.state.experience, company } })}
                        value={company} />
                </View>
                <View style={[styles.layout, { flexDirection: "row" }]}>
                    <Text style={{ flex: 1, alignSelf: "center" }}>I'm still in this role</Text>
                    <CheckBox value={inRole}
                        onValueChange={newValue => {
                            this.setState({
                                experience: {
                                    ...this.state.experience,
                                    inRole: newValue,
                                    startDate: Date.now(),
                                    endDate: Date.now(),
                                },
                                startDateText: 'Start date',
                                endDateText: 'End date'
                            })
                        }} />
                </View>
                <View style={styles.role}>
                    <TouchableOpacity style={styles.role1} onPress={() => this.setState({ showStartDate: !showStartDate })}>
                        <Text style={styles.roleText}>{startDateText}</Text>
                        <Ionicons name="calendar" size={30} />
                    </TouchableOpacity>
                    {(inRole == false) && (
                        <TouchableOpacity style={styles.role2} onPress={() => this.setState({ showEndDate: !showEndDate })}>
                            <Text style={styles.roleText}>{endDateText}</Text>
                            <Ionicons name="calendar" size={30} />
                        </TouchableOpacity>
                    )}

                    {showStartDate && (
                        <DatePicker value={startDate}
                            mode="date"
                            onChange={this.onStartChange} />
                    )}
                    {showEndDate && (
                        <DatePicker value={endDate}
                            mode="date"
                            onChange={this.onEndChange} />
                    )}
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        multiline
                        placeholder="Description (recommended)"
                        onChangeText={description => this.setState({ experience: { ...this.state.experience, description } })}
                        value={description} />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    layout: {
        marginHorizontal: 20,
        marginVertical: 10
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
    },
    role: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    role1: {
        flexDirection: "row",
        flex: 1,
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "space-evenly"
    },
    role2: {
        flexDirection: "row",
        flex: 1,
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "space-evenly"
    },
    roleText: {
        alignSelf: "center",
        color: "grey"
    },
});

export default EditExperience