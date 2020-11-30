import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
import DatePicker from "@react-native-community/datetimepicker";
import moment from 'moment';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Toast from "react-native-simple-toast";

class EditEducation extends React.Component {
    state = {
        education: {},
        finish: '',
        show: false,
    };

    componentDidMount() {
        let params = this.props.navigation.state.params
        if (params.date == null) {
            if (params.complete == true) {
                this.setState({
                    education: params,
                    finish: 'Finished'
                });
            } else {
                this.setState({
                    education: params,
                    finish: 'Expected finish'
                });
            }
        } else {
            this.setState({
                education: params,
                finish: moment(params.date).format('MMM Do YYYY')
            });
        }
    };

    onChange = (event, selectedDate) => {
        const { date } = this.state.education
        const currentDate = selectedDate || date
        this.setState({
            show: !this.state.show,
            education: {
                ...this.state.education,
                date: currentDate
            },
            finish: moment(currentDate).format('MMM Do YYYY'),
        });
    };

    saveEducation = () => {
        const { course, institution, highlights, complete, date, key } = this.state.education
        const { finish } = this.state
        if (course.trim() == '') {
            Toast.show("Please enter course details");
        } else if (institution == '') {
            Toast.show("Please enter institution name");
        } else {
            if (finish == 'Finished' || finish == 'Expected finish') {
                firestore().collection("education").doc(key).set(
                    {
                        userId: (auth().currentUser || {}).uid,
                        course: course,
                        institution: institution,
                        highlights: highlights,
                        complete: complete,
                        date: null
                    }, { merge: true }
                ).then(() => {
                    this.props.navigation.goBack();
                    Toast.show("Qualification added");
                });
            } else {
                if (complete == true && date > Date.now()) {
                    Toast.show("Finish date needs to be before today. If the qualification is not completed, please tick on the box");
                } else if (complete == false && date < Date.now()) {
                    Toast.show("Expected finish date needs to be after today. If the qualification is completed, please tick on the box");
                } else {
                    firestore().collection("education").doc(key).set(
                        {
                            userId: (auth().currentUser || {}).uid,
                            course: course,
                            institution: institution,
                            highlights: highlights,
                            complete: complete,
                            date: date
                        }, { merge: true }
                    ).then(() => {
                        this.props.navigation.goBack();
                        Toast.show("Qualification edited");
                    });
                };
            };
        };
    };

    render() {
        const { complete, course, date, highlights, institution, userId, key } = this.state.education
        const { finish, show } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="arrow-back" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Edit qualification</Text>
                    <TouchableOpacity onPress={this.saveEducation}>
                        <Ionicons name="save-sharp" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Course or qualification"
                        onChangeText={course => this.setState({ education: { ...this.state.education, course } })}
                        value={course} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Instituition"
                        onChangeText={institution => this.setState({ education: { ...this.state.education, institution } })}
                        value={institution} />
                </View>
                <View style={[styles.layout, { flexDirection: "row" }]}>
                    <Text style={{ flex: 1, alignSelf: "center" }}>Qualification complete</Text>
                    <CheckBox value={complete}
                        onValueChange={newValue => {
                            complete
                                ? this.setState({
                                    education: {
                                        ...this.state.education,
                                        complete: newValue,
                                        date: Date.now(),
                                    },
                                    finish: 'Expected finish'
                                })
                                : this.setState({
                                    education: {
                                        ...this.state.education,
                                        complete: newValue,
                                        date: Date.now(),
                                    },
                                    finish: 'Finished'
                                })
                        }} />
                </View>
                <TouchableOpacity style={styles.layout} onPress={() => this.setState({ show: !show })}>
                    <View style={[styles.input, { flexDirection: "row" }]}>
                        <Text style={{ flex: 1, alignSelf: "center", color: "grey" }}>{finish}</Text>
                        <Ionicons name="calendar" size={30} />
                    </View>
                </TouchableOpacity>
                {show && (
                    <DatePicker value={date}
                        mode="date"
                        onChange={this.onChange} />
                )}
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        multiline
                        placeholder="Course highlights (optional)"
                        onChangeText={highlights => this.setState({ education: { ...this.state.education, highlights } })}
                        value={highlights} />
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
    date: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
    },
});

export default EditEducation