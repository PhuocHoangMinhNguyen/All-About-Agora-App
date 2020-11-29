import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import {
    createMaterialTopTabNavigator,
    createBottomTabNavigator
} from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

// My Activity
import AppliedStack from "./ActivityStack/AppliedStack";
import SavedStack from './ActivityStack/SavedStack';

// Profile
import Contact from './EditStack/ContactStack';
import Education from './EditStack/EducationStack';
import Experience from './EditStack/ExperienceStack';
import Skills from './EditStack/SkillsStack';

import DrawerMenu from "./DrawerMenu/DrawerMenu";
import JobAcceptedStack from "./JobAcceptedStack/JobAcceptedStack";
import JobAvailableStack from "./JobAvailableStack/JobAvailableStack";
import MoreStack from "./DrawerMenu/MoreStack";

const ActivityScreen = createMaterialTopTabNavigator(
    {
        SavedStack,
        AppliedStack
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: '#001F4C',
            },
        },
    }
);

const ActivityStack = createStackNavigator(
    {
        ActivityScreen,
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

const EditScreen = createMaterialTopTabNavigator(
    {
        Contact,
        Education,
        Experience,
        Skills
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: '#001F4C',
            },
        },
    }
);

const EditStack = createStackNavigator(
    {
        EditScreen,
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

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