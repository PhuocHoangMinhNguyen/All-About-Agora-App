import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class JobDetails extends React.Component {
    static navigationOptions = {
        title: <Text style={{ color: '#FFF' }}>Job List</Text>,
        headerStyle: { backgroundColor: '#001F4C' },
        headerTitleStyle: { color: 'white' },
        headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => this.props.navigation.goBack()}>
                <Ionicons name="arrow-back" color='white' size={24} />
            </TouchableOpacity>
        )
    };

    state = {
        job: {}
    };

    componentDidMount() {
        let params = this.props.navigation.state.params
        this.setState({ job: params });
    };

    render() {
        return (
            <Text>Job Details</Text>
        )
    }
}

const styles = StyleSheet.create({

});

export default JobDetails;