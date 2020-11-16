import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import Contact from "../../screens/Profile/Contact/Contact";
import EditContact from "../../screens/Profile/Contact/EditContact";

const ContactStack = createStackNavigator(
    {
        Contact,
        EditContact
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

ContactStack.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.contact}>Contact</Text>
    )
}

const styles = StyleSheet.create({
    contact: {
        color: '#FFF',
        fontSize: 13
    }
});

export default ContactStack