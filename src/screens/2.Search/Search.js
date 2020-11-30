import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Search extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Search</Text>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default Search