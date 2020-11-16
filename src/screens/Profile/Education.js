import React from 'react';
import { Text } from 'react-native';

export default class Education extends React.Component {
    render() {
        return (
            <Text>Education</Text>
        )
    }
}

Education.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text>Education</Text>
    )
}