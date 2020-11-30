import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Apply1 from '../screens/Apply/Apply1';
import Apply2 from '../screens/Apply/Apply2';
import Apply3 from '../screens/Apply/Apply3';
import SavedJobDetails from '../screens/Apply/AppliedJob';

const ApplyStep = createStackNavigator(
    {
        Apply1,
        Apply2,
        Apply3,
    },
    {
        initialRouteName: 'Apply1',
        mode: 'modal',
    }
);

ApplyStep.navigationOptions = {
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
        ApplyStep,
        SavedJobDetails
    },
    {
        initialRouteName: 'ApplyStep',
        mode: 'modal',
        tabBarOptions: {
            style: {
                backgroundColor: '#001F4C',
            },
        },
    }
);

ApplyStack.navigationOptions = {
    title: <Text style={{ color: '#FFF' }}>Application Steps</Text>,
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