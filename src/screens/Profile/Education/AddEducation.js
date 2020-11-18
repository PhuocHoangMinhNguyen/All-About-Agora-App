import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
import DatePicker from "@react-native-community/datetimepicker";
import moment from 'moment';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Toast from "react-native-simple-toast";

class AddEducation extends React.Component {
    state = {
        course: '',
        institution: '',
        highlights: '',
        complete: true,
        finish: 'Finished',
        show: false,
        date: Date.now()
    }

    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.date
        this.setState({
            show: !this.state.show,
            date: currentDate,
            finish: moment(currentDate).format('MMM Do YYYY'),
        });
    };

    saveEducation = () => {
        const { course, institution, highlights, complete, date } = this.state
        if (course.trim() == '') {
            Toast.show("Please enter course details");
        } else if (institution == '') {
            Toast.show("Please enter institution name");
        } else {
            firestore().collection("education").add({
                userId: (auth().currentUser || {}).uid,
                course: course,
                institution: institution,
                highlights: highlights,
                complete: complete,
                date: date
            }).then(() => {
                this.props.navigation.goBack();
                Toast.show("Qualification added");
            });
        }
    }

    render() {
        const { course, institution, highlights, complete, finish, show, date } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="close" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Add qualification</Text>
                    <TouchableOpacity onPress={this.saveEducation}>
                        <Ionicons name="save-sharp" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Course or qualification"
                        onChangeText={course => this.setState({ course: course })}
                        value={course} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Instituition"
                        onChangeText={institution => this.setState({ institution: institution })}
                        value={institution} />
                </View>
                <View style={[styles.layout, { flexDirection: "row" }]}>
                    <Text style={{ flex: 1, alignSelf: "center" }}>Qualification complete</Text>
                    <CheckBox value={complete}
                        onValueChange={newValue => {
                            complete
                                ? this.setState({
                                    complete: newValue,
                                    date: Date.now(),
                                    finish: 'Expected finish'
                                })
                                : this.setState({
                                    complete: newValue,
                                    date: Date.now(),
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
                        placeholder="Course highlights (optional)"
                        onChangeText={highlights => this.setState({ highlights: highlights })}
                        value={highlights} />
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
    }
});

export default AddEducation