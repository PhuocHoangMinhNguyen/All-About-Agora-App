import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Contact from './ContactStack';
import Education from './EducationStack';
import Experience from './ExperienceStack';
import Skills from './SkillsStack';

const EditScreen = createMaterialTopTabNavigator(
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

EditScreen.navigationOptions = {
    title: <Text style={{ color: '#FFF' }}>Your resume</Text>,
    headerStyle: { backgroundColor: '#001F4C' },
    headerTitleStyle: { color: 'white', alignSelf: 'center' },
};

const EditStack = createStackNavigator(
    {
        EditScreen,
    },
    {
        mode: "modal",
    }
);

export default EditStack;