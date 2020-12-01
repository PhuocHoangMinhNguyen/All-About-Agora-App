import { createStackNavigator } from "react-navigation-stack";
import Search from "../../screens/2.Search/Search";

const SearchStack = createStackNavigator(
    {
        Search
    },
    {
        headerMode: "none"
    }
);

export default SearchStack