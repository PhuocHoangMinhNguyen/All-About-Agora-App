import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Background from "../../../components/Background"

const Header = (props) => {
    return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate("EditProfile")}>
            <Background />
            <View style={{ alignSelf: "center", position: "absolute", marginTop: 50 }}>
                <Text style={styles.name}>{props.user.name}</Text>
                <Text style={styles.address}>{props.user.address}</Text>
            </View>
        </TouchableOpacity>
    );
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

export default Header