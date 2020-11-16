import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Skills extends React.Component {
    render() {
        return (
            <Text>Skills</Text>
        )
    }
}

Skills.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.skills}>Skills</Text>
    )
}

const styles = StyleSheet.create({
    skills: {
        color: '#FFF'
    }
});