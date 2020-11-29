import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import Experience from "../../screens/4.Profile/Experience/Experience";
import EditExperience from "../../screens/4.Profile/Experience/EditExperience";
import AddExperience from '../../screens/4.Profile/Experience/AddExperience'

const ExperienceStack = createStackNavigator(
    {
        Experience,
        AddExperience,
        EditExperience
    },
    {
        initialRouteName: "Experience",
        mode: "modal",
        headerMode: "none",
    }
);

ExperienceStack.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.experience}>Experience</Text>
    )
};

const styles = StyleSheet.create({
    experience: {
        color: '#FFF',
        fontSize: 13
    },
});

export default ExperienceStack