import { createStackNavigator } from 'react-navigation-stack';
import Skills from "../../screens/Profile/Skills/Skills";
import EditSkills from "../../screens/Profile/Skills/EditSkills";

const SkillsStack = createStackNavigator(
    {
        Skills,
        EditSkills
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

export default SkillsStack