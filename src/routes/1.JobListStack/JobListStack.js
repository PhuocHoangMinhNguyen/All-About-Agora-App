import { createStackNavigator } from "react-navigation-stack";
import JobAccepted from "../../screens/1.JobList/JobList";
import JobDetails from '../../screens/1.JobList/JobDetails';
import Apply1 from '../../screens/1.JobList/Apply/Apply1';

const JobListStack = createStackNavigator(
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

export default JobListStack