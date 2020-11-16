import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

class EditEducation extends React.Component {
    state = {
        course: '',
        institution: '',
        highlights: ''
    }
    render() {
        const { course, institution, highlights } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="close" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Education</Text>
                    <TouchableOpacity onPress={this.saveSummary}>
                        <Ionicons name="save-sharp" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 20 }}>
                    <TextInput style={styles.input}
                        placeholder="Course or qualification"
                        onChangeText={course => this.setState({ course: course })}
                        value={course} />
                </View>
                <View style={{ padding: 20 }}>
                    <TextInput style={styles.input}
                        placeholder="Instituition"
                        onChangeText={institution => this.setState({ institution: institution })}
                        value={institution} />
                </View>
                <View style={{ padding: 20 }}>
                    <TextInput style={styles.input}
                        placeholder="Course highlights (optional)"
                        onChangeText={highlights => this.setState({ highlights: highlights })}
                        value={highlights} />
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
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
    },
});

export default EditEducation