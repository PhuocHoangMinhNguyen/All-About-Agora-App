import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
import DatePicker from "@react-native-community/datetimepicker";
import moment from 'moment';

class EditExperience extends React.Component {
    state = {
        job: '',
        company: '',
        description: '',
        inRole: true,
        showStartDate: false,
        showEndDate: false,
        startDate: Date.now(),
        endDate: Date.now(),
        startDateText: 'Start date',
        endDateText: 'End date',
    }

    saveExperience = () => {

    }

    render() {
        const { job, company, description } = this.state
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
                <View style={{ padding: 20 }}>
                    <TextInput style={styles.input}
                        placeholder="Job title"
                        onChangeText={job => this.setState({ job: job })}
                        value={job} />
                </View>
                <View style={{ padding: 20 }}>
                    <TextInput style={styles.input}
                        placeholder="Company name"
                        onChangeText={company => this.setState({ company: company })}
                        value={company} />
                </View>
                <View style={{ padding: 20, flexDirection: "row" }}>
                    <Text style={{ flex: 1, alignSelf: "center" }}>I'm still in this role</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <TextInput style={styles.input}
                        placeholder="Description (recommended)"
                        onChangeText={description => this.setState({ description: description })}
                        value={description} />
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
});

export default EditExperience