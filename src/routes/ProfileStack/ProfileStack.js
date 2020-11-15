import { createStackNavigator } from "react-navigation-stack";
import EditScreen from "../../screens/Profile/EditScreen";
import EditProfile from '../../screens/Profile/EditProfile';

const ProfileStack = createStackNavigator(
    {
        EditScreen,
        EditProfile
    },
    {
        headerMode: "none"
    }
);

export default ProfileStack