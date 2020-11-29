import { createStackNavigator } from "react-navigation-stack";
import HelpScreen from "../../screens/MoreStack/HelpScreen";
import TermsOfServices from "../../screens/MoreStack/TermsOfServices";
import ChangePassword from "../../screens/MoreStack/ChangePassword";

const MoreStack = createStackNavigator(
    {
        ChangePassword,
        HelpScreen,
        TermsOfServices,
    },
    {
        headerMode: "none",
    }
);

export default MoreStack