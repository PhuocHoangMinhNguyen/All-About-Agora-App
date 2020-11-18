import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Toast from "react-native-simple-toast";

class EditContact extends React.Component {
    state = {
        contact: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            homeLocation: '',
        },
    };

    componentDidMount = async () => {
        const firebaseContact = await firestore().collection("contact").doc((auth().currentUser || {}).uid).get();
        if (firebaseContact.exists) {
            console.log(firebaseContact.data())
            this.setState({ contact: firebaseContact.data() });
        };
    };

    saveContact = () => {
        const { firstName, lastName, phoneNumber, homeLocation } = this.state.contact
        if (firstName == '') {
            Toast.show("Please enter first name");
        } else if (lastName == '') {
            Toast.show("Please enter last name");
        } else if (homeLocation == '') {
            Toast.show("Please enter home location");
        } else {
            firestore().collection('contact').doc((auth().currentUser || {}).uid).set(
                {
                    email: auth().currentUser.email,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    homeLocation: homeLocation
                }, { merge: true }
            ).then(() => {
                this.props.navigation.goBack();
                Toast.show("Contact details stored");
            });
        };
    };

    render() {
        const { firstName, lastName, phoneNumber, homeLocation } = this.state.contact
        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="close" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Add Contact</Text>
                    <TouchableOpacity onPress={this.saveContact}>
                        <Ionicons name="save-sharp" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="First name"
                        onChangeText={firstName => this.setState({ contact: { ...this.state.contact, firstName } })}
                        value={firstName} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Last name"
                        onChangeText={lastName => this.setState({ contact: { ...this.state.contact, lastName } })}
                        value={lastName} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Phone number"
                        keyboardType="numeric"
                        onChangeText={phoneNumber => this.setState({ contact: { ...this.state.contact, phoneNumber } })}
                        value={phoneNumber} />
                </View>
                <View style={styles.layout}>
                    <TextInput style={styles.input}
                        placeholder="Home location"
                        onChangeText={homeLocation => this.setState({ contact: { ...this.state.contact, homeLocation } })}
                        value={homeLocation} />
                </View>
            </View>
        );
    };
};

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
    },
});

export default EditContact