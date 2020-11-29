import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Contact from './ContactStack';
import Education from './EducationStack';
import Experience from './ExperienceStack';
import Skills from './SkillsStack';

const ProfileScreen = createMaterialTopTabNavigator(
    {
        Contact,
        Education,
        Experience,
        Skills
    },
    {
        initialRouteName: 'Contact',
        mode: 'modal',
        tabBarOptions: {
            style: {
                backgroundColor: '#001F4C',
            },
        },
    }
);

ProfileScreen.navigationOptions = {
    title: <Text style={{ color: '#FFF' }}>Your resume</Text>,
    headerStyle: { backgroundColor: '#001F4C' },
    headerTitleStyle: { color: 'white', alignSelf: 'center' },
};

const ProfileStack = createStackNavigator(
    {
        ProfileScreen,
    },
    {
        mode: "modal",
    }
);

export default ProfileStack;