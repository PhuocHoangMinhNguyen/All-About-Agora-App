import { createStackNavigator } from "react-navigation-stack";
import JobAccepted from "../../screens/JobAccepted/JobAccepted";
import JobDetails from '../../screens/JobAccepted/JobDetails';
import Apply1 from '../../screens/JobAccepted/Apply/Apply1';

const JobAcceptedStack = createStackNavigator(
    {
        JobAccepted,
        JobDetails,
        Apply1
    },
    {
        initialRouteName: "JobAccepted",
        mode: "modal",
    }
);

export default JobAcceptedStack