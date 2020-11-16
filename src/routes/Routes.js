import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import {
    createMaterialTopTabNavigator,
    createBottomTabNavigator
} from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

// import Summary from './EditStack/SummaryStack';
// import Education from './EditStack/EducationStack';
// import Experience from './EditStack/ExperienceStack';
// import Skills from './EditStack/SkillsStack';

import Summary from '../screens/Profile/Summary/Summary';
import Education from '../screens/Profile/Education/Education';
import Experience from '../screens/Profile/Experience/Experience';
import Skills from '../screens/Profile/Skills/Skills';

import DrawerMenu from "./DrawerMenu/DrawerMenu";
import JobAcceptedStack from "./JobAcceptedStack/JobAcceptedStack";
import JobAvailableStack from "./JobAvailableStack/JobAvailableStack";
import CreateReviewStack from "./CreateReviewStack/CreateReviewStack";
import MoreStack from "./DrawerMenu/MoreStack";

const EditScreen = createMaterialTopTabNavigator(
    {
        Summary,
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
                CreateReview: {
                    screen: CreateReviewStack,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <AntDesign name="edit" size={24} color={tintColor} />
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