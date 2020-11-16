import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import Summary from "../../screens/Profile/Summary/Summary";
import EditSummary from "../../screens/Profile/Summary/EditSummary";

const SummaryStack = createStackNavigator(
    {
        Summary,
        EditSummary
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

SummaryStack.navigationOptions = {
    tabBarLabel: ({ }) => (
        <Text style={styles.summary}>Summary</Text>
    )
}

const styles = StyleSheet.create({
    summary: {
        color: '#FFF',
        fontSize: 13
    }
});

export default SummaryStack