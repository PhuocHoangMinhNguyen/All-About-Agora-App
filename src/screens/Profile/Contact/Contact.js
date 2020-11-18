import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

class Contact extends React.Component {
    state = {
        contact: null
    }

    componentDidMount() {
        firestore().collection("contact").doc((auth().currentUser || {}).uid)
            .onSnapshot((documentSnapshot) => {
                this.setState({ contact: documentSnapshot.data() });
            });
    }

    render() {
        const { contact } = this.state
        if (contact == null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Contact</Text>
                    <Text style={styles.body}>Add your contact details so employers can contact you.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("EditContact")}>
                        <Text style={{ color: 'white' }}>Add Contact Details</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Contact</Text>
                    <View style={styles.line}>
                        <View style={styles.columnLeft}>
                            <Text>Full name: </Text>
                        </View>
                        <View style={styles.columnRight}>
                            <Text>{contact.firstName + ' ' + contact.lastName}</Text>
                        </View>
                    </View>
                    <View style={styles.line}>
                        <View style={styles.columnLeft}>
                            <Text>Email: </Text>
                        </View>
                        <View style={styles.columnRight}>
                            <Text>{contact.email}</Text>
                        </View>
                    </View>
                    <View style={styles.line}>
                        <View style={styles.columnLeft}>
                            <Text>Phone number: </Text>
                        </View>
                        <View style={styles.columnRight}>
                            <Text>{(contact.phoneNumber == '') ? 'N/A' : contact.phoneNumber}</Text>
                        </View>
                    </View>
                    <View style={styles.line}>
                        <View style={styles.columnLeft}>
                            <Text>Address: </Text>
                        </View>
                        <View style={styles.columnRight}>
                            <Text>{contact.homeLocation}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("EditContact")}>
                        <Text style={{ color: 'white' }}>Add Contact Details</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30
    },
    body: {
        color: 'grey',
        marginVertical: 18
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 40,
        backgroundColor: "#003787",
        borderRadius: 4,
        marginVertical: 12,
        marginEnd: 16
    },
    line: {
        flexDirection: "row",
        marginVertical: 10,
    },
    columnLeft: {
        flex: 1
    },
    columnRight: {
        flex: 2
    }
});

export default Contact