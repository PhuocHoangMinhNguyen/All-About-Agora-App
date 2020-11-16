import React from "react";
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Summary from "./Summary";
import Education from "./Education";

const EditScreen = createStackNavigator(
    {
        default: createMaterialTopTabNavigator(
            {
                Summary: {
                    screen: Summary,
                    navigationOptions: {
                        tabBarLabel: ({ }) => (
                            <Text>Summary</Text>
                        ),
                    },
                },
                Education: {
                    screen: Education,
                    navigationOptions: {
                        tabBarLabel: ({ }) => (
                            <Text>Education</Text>
                        ),
                    },
                },
            },
            {
                tabBarOptions: {
                    scrollEnabled: false,
                },
            }
        ),
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

export default EditScreen