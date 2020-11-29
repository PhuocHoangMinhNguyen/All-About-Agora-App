import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import AppliedStack from "./AppliedStack";
import SavedStack from './SavedStack';
import SavedJobDetails from '../../screens/1.JobList/JobDetails';
import ApplyScreen1 from '../../screens/1.JobList/Apply/Apply1';

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
        SavedJobDetails,
        ApplyScreen1
    },
    {
        initialRouteName: 'ActivityScreen',
        mode: "modal",
    }
);

export default ActivityStack;