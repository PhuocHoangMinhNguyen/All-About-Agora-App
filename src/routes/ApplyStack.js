import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Apply from '../screens/Apply/Apply';
import SavedJobDetails from '../screens/Apply/AppliedJob';

Apply.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.label}>Application</Text>
    )
};

SavedJobDetails.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.label}>Job details</Text>
    )
};

const ApplyStack = createMaterialTopTabNavigator(
    {
        Apply,
        SavedJobDetails
    },
    {
        initialRouteName: 'Apply',
        mode: 'modal',
        tabBarOptions: {
            style: {
                backgroundColor: '#001F4C',
            },
        },
    }
);

ApplyStack.navigationOptions = {
    title: <Text style={{ color: 'white' }}>Application Steps</Text>,
    headerStyle: { backgroundColor: '#001F4C' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white'
};

const styles = StyleSheet.create({
    label: {
        color: 'white',
    },
});


export default ApplyStack