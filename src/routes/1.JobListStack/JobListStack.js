import { createStackNavigator } from "react-navigation-stack";
import JobAccepted from "../../screens/1.JobList/JobList";
import JobDetails from '../../screens/1.JobList/JobDetails';
import ApplyStack from '../ApplyStack';

const JobListStack = createStackNavigator(
    {
        JobAccepted,
        JobDetails,
        ApplyStack
    },
    {
        initialRouteName: "JobAccepted",
        mode: "modal",
    }
);

export default JobListStack