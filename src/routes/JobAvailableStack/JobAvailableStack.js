import { createStackNavigator } from "react-navigation-stack";
import JobAvailable from "../../screens/JobAvailable/JobAvailable";

const JobAvailableStack = createStackNavigator(
    {
        JobAvailable
    },
    {
        headerMode: "none"
    }
);

export default JobAvailableStack