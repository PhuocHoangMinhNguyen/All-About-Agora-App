import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import SavedActivity from '../../screens/Activity/SavedActivity';

const SavedStack = createStackNavigator(
    {
        SavedActivity,
    },
    {
        initialRouteName: 'SavedActivity',
        mode: 'modal',
        headerMode: "none"
    }
);

SavedStack.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.saved}>Saved</Text>
    )
};

const styles = StyleSheet.create({
    saved: {
        color: '#FFF',
        fontSize: 13
    },
});

export default SavedStack