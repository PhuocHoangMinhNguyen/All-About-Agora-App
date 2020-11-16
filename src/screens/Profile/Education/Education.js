import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Education extends React.Component {
    render() {
        return (
            <Text>Education</Text>
        )
    }
}

Education.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.education}>Education</Text>
    )
}

const styles = StyleSheet.create({
    education: {
        color: '#FFF'
    }
});