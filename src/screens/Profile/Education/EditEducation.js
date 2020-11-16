import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
import DatePicker from "@react-native-community/datetimepicker";
import moment from 'moment';

class EditEducation extends React.Component {
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
            finish: moment(selectedDate).format('MMMM Do YYYY'),
        });
    };

    saveEducation = () => {

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
                <View style={{ padding: 20 }}>
                    <TextInput style={styles.input}
                        placeholder="Course or qualification"
                        onChangeText={course => this.setState({ course: course })}
                        value={course} />
                </View>
                <View style={{ padding: 20 }}>
                    <TextInput style={styles.input}
                        placeholder="Instituition"
                        onChangeText={institution => this.setState({ institution: institution })}
                        value={institution} />
                </View>
                <View style={{ padding: 20, flexDirection: "row" }}>
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
                <TouchableOpacity style={{ padding: 20 }} onPress={() => this.setState({ show: !show })}>
                    <View style={[styles.input, { flexDirection: "row" }]}>
                        <Text style={{ flex: 1, alignSelf: "center", color: "grey" }}>{finish}</Text>
                        <Ionicons name="calendar" size={30} />
                    </View>

                    {show && (
                        <DatePicker value={date}
                            mode="date"
                            onChange={this.onChange} />
                    )}
                </TouchableOpacity>
                <View style={{ padding: 20 }}>
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

export default EditEducation