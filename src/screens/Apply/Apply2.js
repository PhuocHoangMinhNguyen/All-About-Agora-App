import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

class Apply2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView></ScrollView>
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
        flex: 1
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
        marginHorizontal: 10
    },
    continue: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        flex: 1,
        backgroundColor: "#001F4C",
        borderRadius: 10,
        marginHorizontal: 10,
    }
});

export default Apply2;