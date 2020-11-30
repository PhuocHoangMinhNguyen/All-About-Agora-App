import { createStackNavigator } from "react-navigation-stack";
import JobList from "../../screens/1.JobList/JobList";
import JobDetails from '../../screens/1.JobList/JobDetails';
import ApplyStack from '../ApplyStack';

const JobListStack = createStackNavigator(
    {
        JobList,
        JobDetails,
        ApplyStack
    },
    {
        initialRouteName: "JobList",
        mode: "modal",
    }
);

export default JobListStack