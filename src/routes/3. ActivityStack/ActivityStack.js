import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import AppliedStack from "./AppliedStack";
import SavedStack from './SavedStack';
import SavedJobDetails from '../../screens/JobAccepted/JobDetails';

const ActivityScreen = createMaterialTopTabNavigator(
    {
        SavedStack,
        AppliedStack
    },
    {
        initialRouteName: 'SavedStack',
        mode: 'modal',
        tabBarOptions: {
            style: {
                backgroundColor: '#001F4C',
            },
        },
    }
);

ActivityScreen.navigationOptions = {
    title: <Text style={{ color: '#FFF' }}>My Activity</Text>,
    headerStyle: { backgroundColor: '#001F4C' },
    headerTitleStyle: { color: 'white', alignSelf: 'center' },
};

const ActivityStack = createStackNavigator(
    {
        ActivityScreen,
        SavedJobDetails
    },
    {
        initialRouteName: 'ActivityScreen',
        mode: "modal",
    }
);

export default ActivityStack;