import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

class Education extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Education</Text>
                <Text style={styles.body}>Tell employers about your education.</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("AddEducation")}>
                    <Text style={{ color: 'white' }}>Add qualification</Text>
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

export default Education