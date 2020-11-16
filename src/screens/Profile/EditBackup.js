import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Education from './Education/Education';
import Summary from './Summary/Summary';
import Background from "../../components/Background";

class EditScreen extends React.Component {
    state = {
        user: {
            name: "Add your name",
            address: "Add your location"
        }
    }

    componentDidMount = async () => {
        const user = this.props.uid || (auth().currentUser || {}).uid

        const firestoreUser = await firestore().collection("users").doc(user).get();
        if (firestoreUser.exists) {
            this.setState({ user: firestoreUser.data() });
        }
    }

    render() {
        const { user } = this.state
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("EditProfile")}>
                    <Background />
                    <View style={{ alignSelf: "center", position: "absolute", marginTop: 50 }}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.address}>{user.address}</Text>
                    </View>
                </TouchableOpacity>
                <Summary />
                <Education />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    },
    address: {
        color: "white",
        textAlign: "center"
    }
});

export default EditScreen
