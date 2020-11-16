import React from 'react';
import { Text } from 'react-native';

export default class Summary extends React.Component {
    render() {
        return (
            <Text>Summary</Text>
        )
    }
}

Summary.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text>Summary</Text>
    )
}