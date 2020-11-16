import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class Skills extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Skills</Text>
                <Text style={styles.body}>Skills</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("EditSkills")}>
                    <Text style={{ color: 'white' }}>Add skills</Text>
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
        color: 'grey'
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 40,
        backgroundColor: "#1565C0",
        borderRadius: 4,
        marginVertical: 12,
        marginEnd: 16
    }
});

export default Skills