import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

class EditSummary extends React.Component {
    state = {
        summary: ""
    }

    saveSummary = () => {
        const { summary } = this.state
        if (summary.trim() == '') {
            console.log("Empty");
        } else {
            console.log(this.state.summary);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="close" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Add Summary</Text>
                    <TouchableOpacity onPress={this.saveSummary}>
                        <Ionicons name="save-sharp" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <TextInput placeholder="Highlight your unique experiences, ambitions and strengths."
                        multiline
                        onChangeText={summary => this.setState({ summary: summary })}
                        value={this.state.summary} />
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
    icons: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 24
    }
});

export default EditSummary