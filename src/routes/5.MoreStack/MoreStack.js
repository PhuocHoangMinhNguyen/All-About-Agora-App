import { createStackNavigator } from "react-navigation-stack";
import HelpScreen from "../../screens/5.More/HelpScreen";
import TermsOfServices from "../../screens/5.More/TermsOfServices";
import ChangePassword from "../../screens/5.More/ChangePassword";

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