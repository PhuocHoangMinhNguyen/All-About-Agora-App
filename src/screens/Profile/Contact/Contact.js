import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class Contact extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Contact</Text>
                <Text style={styles.body}>Add your contact details so employers can contact you.</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("EditContact")}>
                    <Text style={{ color: 'white' }}>Add Contact Details</Text>
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

export default Contact