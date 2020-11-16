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
                Summary,
                Education,
            },
            {
                tabBarOptions: {
                    //activeTintColor: 'white',
                    showLabel: true,
                    showIcon: false,
                    style: {
                        //backgroundColor: 'blue'
                    }
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