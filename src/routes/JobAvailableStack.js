import { createStackNavigator } from "react-navigation-stack";
import JobAvailable from "../screens/JobAvailable/JobAvailable";

JobAvailableStack = createStackNavigator(
    {
        JobAvailable
    },
    {
        headerMode: "none"
    }
);

export default JobAvailableStack