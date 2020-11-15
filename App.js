import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import LoadingScreen from "./src/screens/LoadingScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import AuthStack from "./src/routes/AuthStack";
import BottomTabs from "./src/routes/BottomTabs";
import DrawerMenu from "./src/routes/DrawerMenu/DrawerMenu";

const Drawer = createDrawerNavigator(
  {
    BottomTabs,
  },
  {
    drawerPosition: "right",
    drawerWidth: 250,
    contentComponent: props => <DrawerMenu {...props} />
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: Drawer,
      AuthStack,
      Verify: VerificationScreen
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