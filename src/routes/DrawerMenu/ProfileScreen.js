import React from "react";
import { View, Text, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

class ProfileScreen extends React.Component {
  state = {
    user: {},
  };

  unsubscribe = null

  componentDidMount() {
    this.unsubscribe = firestore().collection("contact").doc((auth().currentUser || {}).uid)
      .onSnapshot(doc => {
        this.setState({ user: doc.data() });
      });
  };

  componentWillUnmount() {
    this.unsubscribe();
  };

  render() {
    const { user } = this.state
    if (user == null) {
      return (
        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <Text style={styles.name}>Add your name</Text>
          <Text style={styles.email}>{auth().currentUser.email}</Text>
        </View>
      );
    } else {
      return (
        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={styles.email}>{`Email: ${auth().currentUser.email}`}</Text>
          <Text style={styles.location}>{`Address: ${user.homeLocation}`}</Text>
          <Text style={styles.phoneNumber}>{`Phone: ${user.phoneNumber}`}</Text>
        </View>
      );
    };
  };
};

const styles = StyleSheet.create({
  avatarContainer: {
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4
  },
  name: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  email: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5,
    color: "white"
  },
  location: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5,
    color: "white"
  },
  phoneNumber: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 15,
    color: "white"
  }
});

export default ProfileScreen