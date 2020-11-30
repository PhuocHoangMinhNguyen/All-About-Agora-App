import React from "react";
import { Text, StyleSheet } from "react-native";

class AppliedActivity extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Applied Activity</Text>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});

export default AppliedActivity