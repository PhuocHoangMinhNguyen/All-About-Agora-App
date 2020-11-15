import { createStackNavigator } from "react-navigation-stack";
import EditScreen from "../screens/MoreStack/Profile/EditScreen";
import EditProfile from "../screens/MoreStack/Profile/EditProfile";
import HelpScreen from "../screens/MoreStack/HelpScreen";
import TermsOfServices from "../screens/MoreStack/TermsOfServices";
import ChangePassword from "../screens/MoreStack/ChangePassword";

MoreStack = createStackNavigator(
    {
        // Drawer Menu
        EditScreen,
        EditProfile,
        ChangePassword,
        HelpScreen,
        TermsOfServices,
    },
    {
        headerMode: "none",
    }
);

export default MoreStack