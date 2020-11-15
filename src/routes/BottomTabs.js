import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import JobAcceptedStack from "./JobAcceptedStack/JobAcceptedStack";
import JobAvailableStack from "./JobAvailableStack/JobAvailableStack";
import CreateReviewStack from "./CreateReviewStack/CreateReviewStack";
import MoreStack from "./DrawerMenu/MoreStack";
import ProfileStack from "./ProfileStack/ProfileStack";

const BottomTabs = createStackNavigator(
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
                            <AntDesign name="edit" size={24} color={tintColor} />
                        ),
                        tabBarOnPress: ({ defaultHandler }) => defaultHandler()
                    },
                },
                Profile: {
                    screen: ProfileStack,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <AntDesign name="profile" size={24} color={tintColor} />
                        ),
                        tabBarOnPress: ({ defaultHandler }) => defaultHandler()
                    },
                },
                Settings: {
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