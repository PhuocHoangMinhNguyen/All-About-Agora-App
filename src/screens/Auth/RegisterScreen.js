import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import auth from "@react-native-firebase/auth";
import Ionicons from "react-native-vector-icons/Ionicons";
import Toast from "react-native-simple-toast";
import CheckBox from "@react-native-community/checkbox";
import Background from '../../components/Background';

var logoTest = require("../../assets/images/logoTest.png");

class RegisterScreen extends React.Component {
  state = {
    user: {
      email: "",
      password: "",
    },
    errorMessage: null,
    showPassword: false,
    toggleCheckBox: false,
  };

  // To Show or Hide Password
  handlePassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  };

  // Check if all information is entered before create a new user.
  handleSignUp = () => {
    const { user, toggleCheckBox } = this.state
    if (user.email.trim == "") {
      Toast.show("Please Enter Email Information", Toast.LONG);
    } else if (user.password == "") {
      Toast.show("Please Enter A Password", Toast.LONG);
    } else if (toggleCheckBox == false) {
      Toast.show("Please Agree to Terms of Services", Toast.LONG);
    } else {
      this.createUser(user);
    };
  };

  // create a new user in Firebase Authentication with email and password, 
  // then store the information in Firestore,
  createUser = async user => {
    try {
      await auth()
        .createUserWithEmailAndPassword(user.email.trim(), user.password)
        .catch(error => this.setState({ errorMessage: error.message }));
      await auth().currentUser.sendEmailVerification();
    } catch (error) { }
  };

  render() {
    const { email, password } = this.state.user
    const { errorMessage, showPassword, toggleCheckBox } = this.state
    return (
      <View style={styles.container}>
        <Background />
        <TouchableOpacity style={styles.back}
          onPress={() => this.props.navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={32} color="#FFF" />
        </TouchableOpacity>
        <View style={{ position: "absolute", alignSelf: "center" }} >
          <Text style={styles.greeting}>Welcome to Reamot!</Text>
          <Image source={logoTest} style={styles.logoTest} />
        </View>
        <ScrollView>
          <View style={styles.errorMessage}>
            {errorMessage && (
              <Text style={styles.error}>{errorMessage}</Text>
            )}
          </View>

          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Email Address</Text>
              <TextInput style={styles.input}
                autoCapitalize="none"
                onChangeText={email => this.setState({ user: { ...this.state.user, email } })}
                value={email} />
            </View>

            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput style={styles.password}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  onChangeText={password => this.setState({ user: { ...this.state.user, password } })}
                  value={password} />
                <TouchableOpacity onPress={this.handlePassword}>
                  {showPassword == true
                    ? <Ionicons name="eye" size={24} />
                    : <Ionicons name="eye-off" size={24} />}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.termsOfServicesContainer}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => this.setState({ toggleCheckBox: newValue })}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", flex: 1 }}>
              <Text>I agree to Reamot</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Terms")}>
                <Text style={styles.termsOfServices}>Terms of Services</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 24 }}
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          >
            <Text style={{ color: "#414959", fontSize: 13 }}>
              Already have an account?
            <Text style={{ fontWeight: "500", color: "#018ABE" }}> Sign in</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoTest: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginTop: -20
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#FFF"
  },
  form: {
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  password: {
    height: 40,
    fontSize: 15,
    color: "#161F3D",
    flex: 1
  },
  passwordContainer: {
    flexDirection: "row",
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#1565C0",
    borderRadius: 4,
    marginHorizontal: 30
  },
  errorMessage: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginBottom: 12
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  back: {
    position: "absolute",
    top: 24,
    left: 30,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  termsOfServicesContainer: {
    marginVertical: 24,
    marginHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  termsOfServices: {
    textDecorationLine: "underline"
  },
});

export default RegisterScreen