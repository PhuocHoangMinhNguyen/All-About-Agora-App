import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Apply1 from '../screens/Apply/Apply1';
import Apply2 from '../screens/Apply/Apply2';
import SavedJobDetails from '../screens/3.Activity/SavedJobDetails';

const ApplyStep = createStackNavigator(
    {
        Apply1,
        Apply2
    },
    {
        initialRouteName: 'Apply1',
        mode: 'modal',
    }
);

const ApplyStack = createMaterialTopTabNavigator(
    {
        ApplyStep,
        SavedJobDetails
    },
    {
        initialRouteName: 'ApplyStep',
        mode: 'modal',
    }
);

export default ApplyStack