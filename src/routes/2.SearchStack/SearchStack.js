import { createStackNavigator } from "react-navigation-stack";
import JobAvailable from "../../screens/2.Search/Search";

const SearchStack = createStackNavigator(
    {
        JobAvailable
    },
    {
        headerMode: "none"
    }
);

export default SearchStack