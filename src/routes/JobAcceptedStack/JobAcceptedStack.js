import { createStackNavigator } from "react-navigation-stack";
import JobAccepted from "../../screens/JobAccepted/JobAccepted";
import JobDetails from '../../screens/JobAccepted/JobDetails';

const JobAcceptedStack = createStackNavigator(
    {
        JobAccepted,
        JobDetails
    },
    {
        initialRouteName: "JobAccepted",
        mode: "modal",
        headerMode: "none"
    }
);

export default JobAcceptedStack