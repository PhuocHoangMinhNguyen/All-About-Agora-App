import { createStackNavigator } from 'react-navigation-stack';
import Experience from "../../screens/Profile/Experience/Experience";
import EditExperience from "../../screens/Profile/Experience/EditExperience";

const ExperienceStack = createStackNavigator(
    {
        Experience,
        EditExperience
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

export default ExperienceStack