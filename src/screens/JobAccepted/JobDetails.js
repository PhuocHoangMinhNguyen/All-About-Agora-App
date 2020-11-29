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