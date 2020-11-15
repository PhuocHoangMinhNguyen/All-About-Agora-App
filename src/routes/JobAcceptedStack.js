import { createStackNavigator } from "react-navigation-stack";
import JobAccepted from "../screens/JobAccepted/JobAccepted";

JobAcceptedStack = createStackNavigator(
    {
        JobAccepted
    },
    {
        headerMode: "none"
    }
);

export default JobAcceptedStack