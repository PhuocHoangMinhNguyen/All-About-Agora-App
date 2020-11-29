import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

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
        return (
            <View style={styles.container}>
                <ScrollView></ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={this.saveJob} onPress={this.handleSaveJob}>
                        <Text>Save job</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.apply} onPress={this.handleApply}>
                        <Text>Quick apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    saveJob: {
        flex: 1
    },
    apply: {
        flex: 1
    }
});

export default JobDetails;