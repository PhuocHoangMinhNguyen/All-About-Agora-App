import React from "react";
import { View, Text, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

class ProfileScreen extends React.Component {
  state = {
    user: {}
  }

  unsubscribe = null

  componentDidMount() {
    const user = this.props.uid || (auth().currentUser || {}).uid

    this.unsubscribe = firestore().collection("users").doc(user)
      .onSnapshot(doc => {
        this.setState({ user: doc.data() });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { user } = this.state
    if (user == null) {
      return (
        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <Text style={styles.name}>Add your name</Text>
          <Text style={styles.email}>{auth().currentUser.email}</Text>
        </View>
      )
    } else {
      return (
        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{auth().currentUser.email}</Text>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  avatarContainer: {
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "white"
  },
  email: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 15,
    color: "white"
  },
  button: {
    marginVertical: 8,
    marginHorizontal: 16
  }
});

export default ProfileScreen