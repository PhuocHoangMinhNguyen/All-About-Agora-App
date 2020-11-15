import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoadingScreen from "./src/screens/LoadingScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import AuthStack from "./src/routes/AuthStack/AuthStack";
import Drawer from "./src/routes/DrawerMenu/DrawerStack";

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: Drawer,
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