import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

class Apply2 extends React.Component {
    state = {
        job: {}
    };

    componentDidMount() {
        let params = this.props.navigation.state.params
        this.setState({ job: params });
    };

    render() {
        const { job } = this.state
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                        Your SEEK Profile is sent with your application
                    </Text>
                    <Text>
                        {`In addition to the information in this application,
                        ${job.businessName}`}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name='dot-single' size={20} />
                        <Text>Career history</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name='dot-single' size={20} />
                        <Text>Education</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name='dot-single' size={20} />
                        <Text>Skills</Text>
                    </View>
                </ScrollView>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                        <Text style={{ color: "#001F4C" }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.continue} onPress={() => this.props.navigation.navigate("Apply3")}>
                        <Text style={{ color: 'white' }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    bottom: {
        flexDirection: 'row',
    },
    back: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        flex: 1,
        borderColor: "#001F4C",
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10
    },
    continue: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        flex: 1,
        backgroundColor: "#001F4C",
        borderRadius: 10,
        marginLeft: 10,
    }
});

export default Apply2;