import { createStackNavigator } from "react-navigation-stack";
import CreateReview from "../screens/CreateReview/CreateReview";

CreateReviewStack = createStackNavigator(
    {
        CreateReview
    },
    {
        headerMode: "none"
    }
);

export default CreateReviewStack