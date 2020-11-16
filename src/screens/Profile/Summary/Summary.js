import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class Summary extends React.Component {
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

const styles = StyleSheet.create({
    container: {

    }
});

export default Summary