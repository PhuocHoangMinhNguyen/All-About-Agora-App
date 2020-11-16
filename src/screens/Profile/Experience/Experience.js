import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Experience extends React.Component {
    render() {
        return (
            <Text>Experience</Text>
        )
    }
}

Experience.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.experience}>Experience</Text>
    )
}

const styles = StyleSheet.create({
    experience: {
        color: '#FFF'
    }
});