import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
// Job List
import JobAcceptedStack from "./1. JobAcceptedStack/JobAcceptedStack";
import JobAvailableStack from "./2. JobAvailableStack/JobAvailableStack";

// My Activity
import ActivityStack from "./3. ActivityStack/ActivityStack";

// Profile
import EditStack from './4. ProfileStack/EditStack';

import MoreStack from "./5. MoreStack/MoreStack";
import DrawerMenu from "./DrawerMenu/DrawerMenu";

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
                Activity: {
                    screen: ActivityStack,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <Ionicons name="star" size={24} color={tintColor} />
                        ),
                        tabBarOnPress: ({ defaultHandler }) => defaultHandler()
                    },
                },
                Edit: {
                    screen: EditStack,
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

const Routes = createDrawerNavigator(
    {
        BottomTabs,
    },
    {
        drawerPosition: "right",
        drawerWidth: 250,
        contentComponent: props => <DrawerMenu {...props} />
    }
);

export default Routes