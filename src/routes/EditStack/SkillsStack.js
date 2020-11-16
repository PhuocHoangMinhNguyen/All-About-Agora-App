import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import Skills from "../../screens/Profile/Skills/Skills";
import EditSkills from "../../screens/Profile/Skills/EditSkills";

const SkillsStack = createStackNavigator(
    {
        Skills,
        EditSkills
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);


SkillsStack.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.skills}>Skills</Text>
    )
}

const styles = StyleSheet.create({
    skills: {
        color: '#FFF',
        fontSize: 13
    }
});

export default SkillsStack