import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Summary extends React.Component {
    render() {
        return (
            <Text>Summary</Text>
        )
    }
}

Summary.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.summary}>Summary</Text>
    )
}

const styles = StyleSheet.create({
    summary: {
        color: '#FFF'
    }
});