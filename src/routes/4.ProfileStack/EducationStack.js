import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import Education from "../../screens/Profile/Education/Education";
import EditEducation from "../../screens/Profile/Education/EditEducation";
import AddEducation from '../../screens/Profile/Education/AddEducation';

const EducationStack = createStackNavigator(
    {
        Education,
        EditEducation,
        AddEducation
    },
    {
        initialRouteName: "Education",
        mode: "modal",
        headerMode: "none",
    }
);

EducationStack.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.education}>Education</Text>
    )
};

const styles = StyleSheet.create({
    education: {
        color: '#FFF',
        fontSize: 13
    },
});

export default EducationStack