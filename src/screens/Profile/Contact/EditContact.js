import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Toast from "react-native-simple-toast";

class EditContact extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        homeLocation: '',
    }

    saveSummary = () => {
        const { firstName, lastName, phoneNumber, homeLocation } = this.state
        if (firstName == '') {
            Toast.show("Please enter first name");
        } else if (lastName == '') {
            Toast.show("Please enter last name");
        } else if (homeLocation == '') {
            Toast.show("Please enter home location");
        } else {
            firestore().collection('contact').add({
                email: auth().currentUser.email,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                homeLocation: homeLocation
            }).then(() => {
                this.props.navigation.goBack();
                Toast.show("Contact details stored");
            })
        }
    }

    render() {
        const { firstName, lastName, phoneNumber, homeLocation } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="close" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Add Contact</Text>
                    <TouchableOpacity onPress={this.saveSummary}>
                        <Ionicons name="save-sharp" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="First name"
                        onChangeText={firstName => this.setState({ firstName: firstName })}
                        value={firstName} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Last name"
                        onChangeText={lastName => this.setState({ lastName: lastName })}
                        value={lastName} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Phone number"
                        onChangeText={phoneNumber => this.setState({ phoneNumber: phoneNumber })}
                        value={phoneNumber} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Home location"
                        onChangeText={homeLocation => this.setState({ homeLocation: homeLocation })}
                        value={homeLocation} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    layout: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    icons: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 24
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
    }
});

export default EditContact