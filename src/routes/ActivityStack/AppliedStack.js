import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import AppliedActivity from "../../screens/Activity/AppliedActivity";

const AppliedStack = createStackNavigator(
    {
        AppliedActivity
    },
    {
        initialRouteName: 'AppliedActivity',
        mode: 'modal',
        headerMode: "none"
    }
);

AppliedStack.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.applied}>Applied</Text>
    )
};

const styles = StyleSheet.create({
    applied: {
        color: '#FFF',
        fontSize: 13
    },
});

export default AppliedStack