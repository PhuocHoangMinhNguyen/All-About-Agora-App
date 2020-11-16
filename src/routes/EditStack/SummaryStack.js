import { createStackNavigator } from 'react-navigation-stack';
import Summary from "../../screens/Profile/Summary/Summary";
import EditSummary from "../../screens/Profile/Summary/EditSummary";

const SummaryStack = createStackNavigator(
    {
        Summary,
        EditSummary
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

export default SummaryStack