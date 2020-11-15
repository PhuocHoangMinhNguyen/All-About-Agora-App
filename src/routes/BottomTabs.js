import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import JobAcceptedStack from "./JobAcceptedStack";
import JobAvailableStack from "./JobAvailableStack";
import CreateReviewStack from "./CreateReviewStack";
import MoreStack from "./MoreStack";

BottomTabs = createStackNavigator(
    {
        default: createBottomTabNavigator(
            {
                JobAccepted: {
                    screen: JobAcceptedStack,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons name="ios-home" size={24} color={tintColor} />
                        ),
                        tabBarOnPress: ({ defaultHandler }) => defaultHandler()
                    },
                },
                JobAvaible: {
                    screen: JobAvailableStack,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons name="search" size={24} color={tintColor} />
                        ),
                        tabBarOnPress: ({ defaultHandler }) => defaultHandler()
                    },
                },
                CreateReview: {
                    screen: CreateReviewStack,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons name="document-text-outline" size={24} color={tintColor} />
                        ),
                        tabBarOnPress: ({ defaultHandler }) => defaultHandler()
                    },
                },
                Profile: {
                    screen: MoreStack,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons name="reorder-three" size={24} color={tintColor} />
                        ),
                        tabBarOnPress: ({ navigation }) => { navigation.openDrawer() }
                    },
                },
            },
            {
                tabBarOptions: {
                    activeTintColor: "#161F3D",
                    inactiveTintColor: "#B8BBC4",
                    showLabel: false,
                },
            }
        ),
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

export default BottomTabs