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

    render() {
        return (
            <Text>Edit Experience</Text>
        );
    };
};

export default EditExperience