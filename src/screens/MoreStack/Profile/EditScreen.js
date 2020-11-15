import React from 'react';
import { View, Text } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Header from './Header';

class EditScreen extends React.Component {
    state = {
        user: {
            name: "Add your name",
            address: "Add your location"
        }
    }
    a
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
                <Header user={user} />
                <Text>Test</Text>
            </View>
        )
    }
};

export default EditScreen
