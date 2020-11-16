import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class Summary extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Summary</Text>
                <Text style={styles.body}>Add a personal summary to your profile as a way to introduce who you are.</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("EditSummary")}>
                    <Text style={{ color: 'white' }}>Add summary</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30
    },
    body: {
        color: 'grey',
        marginVertical: 18
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 40,
        backgroundColor: "#003787",
        borderRadius: 4,
        marginVertical: 12,
        marginEnd: 16
    }
});

export default Summary