import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../../screens/Auth/LoginScreen";
import RegisterScreen from "../../screens/Auth/RegisterScreen";
import ForgotPasswordScreen from "../../screens/Auth/ForgotPasswordScreen";
import Terms from "../../screens/Auth/Terms";

const AuthStack = createStackNavigator(
    {
        LoginScreen,
        RegisterScreen,
        ForgotPasswordScreen,
        Terms
    },
    {
        initialRouteName: 'LoginScreen',
        mode: 'modal',
        headerMode: "none"
    }
);

export default AuthStack