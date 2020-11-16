import { createStackNavigator } from 'react-navigation-stack';
import Education from "../../screens/Profile/Education/Education";
import EditEducation from "../../screens/Profile/Education/EditEducation";

const EducationStack = createStackNavigator(
    {
        Education,
        EditEducation
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

export default EducationStack