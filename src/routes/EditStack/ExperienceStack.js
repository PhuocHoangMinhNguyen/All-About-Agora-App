import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import Experience from "../../screens/Profile/Experience/Experience";
import EditExperience from "../../screens/Profile/Experience/EditExperience";

const ExperienceStack = createStackNavigator(
    {
        Experience,
        EditExperience
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

ExperienceStack.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.experience}>Experience</Text>
    )
}

const styles = StyleSheet.create({
    experience: {
        color: '#FFF'
    }
});

export default ExperienceStack