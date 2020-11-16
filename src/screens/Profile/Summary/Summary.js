import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class Summary extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Summary</Text>
                <Text>Summary</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("EditSummary")}>
                    <Text>Test</Text>
                </TouchableOpacity>
            </View>
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