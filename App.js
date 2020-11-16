import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoadingScreen from "./src/screens/LoadingScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import AuthStack from "./src/routes/AuthStack/AuthStack";
import Routes from "./src/routes/Routes";

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: Routes,
      AuthStack,
      Verify: VerificationScreen,
    },
    {
      initialRouteName: "Loading",
    }
  )
);

class App extends React.Component {
  render() {
    return <AppContainer />
  }
};

export default App