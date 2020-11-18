import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import auth from "@react-native-firebase/auth";

// Used to show user information in drawer menu.
import ProfileScreen from './ProfileScreen';

// Used for the icons in each option of the drawer menu.
import Ionicons from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

class DrawerMenu extends React.Component {
    handleSignOut = () => {
        auth().signOut();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "#001F4C" }}>
                    <TouchableOpacity style={styles.back}
                        onPress={() => { this.props.navigation.closeDrawer() }}>
                        <Ionicons name="arrow-back" size={20} color={"#FFF"} />
                    </TouchableOpacity>
                    <ProfileScreen />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate("ChangePassword")
                        this.props.navigation.closeDrawer()
                    }}>
                    <Ionicons name="lock-open-outline" size={20} color={"#161F3D"} />
                    <Text>  Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate("HelpScreen")
                        this.props.navigation.closeDrawer()
                    }}>
                    <Ionicons name="help" size={20} color={"#161F3D"} />
                    <Text>  FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate("TermsOfServices")
                        this.props.navigation.closeDrawer()
                    }}>
                    <Ionicons name="document-text-outline" size={20} color={"#161F3D"} />
                    <Text>  Terms Of Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.handleSignOut() }}>
                    <Material name="logout" size={20} color={"#161F3D"} />
                    <Text>  Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
        flexDirection: "row"
    },
    back: {
        position: "absolute",
        top: 10,
        left: 10,
        width: 30,
        height: 30,
        borderRadius: 16,
    },
});

export default DrawerMenu