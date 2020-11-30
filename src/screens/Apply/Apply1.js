import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

class Apply1 extends React.Component {
    handleUploadResume = () => {

    };

    handleUploadCoverLetter = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>Documents for this application</Text>
                    <Text style={styles.intro}>{`You can choose to add a cover letter and a resume to your application.`}</Text>
                    <View style={styles.header}>
                        <Text style={styles.resume}>Resume</Text>
                        <TouchableOpacity onPress={this.handleUploadResume}>
                            <Text style={styles.upload}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.resume}>Cover letter</Text>
                        <TouchableOpacity onPress={this.handleUploadCoverLetter}>
                            <Text style={styles.upload}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.continue} onPress={() => this.props.navigation.navigate("Apply2")}>
                    <Text style={{ color: 'white' }}>Continue</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    intro: {
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    resume: {
        fontWeight: 'bold'
    },
    upload: {
        color: 'blue'
    },
    continue: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        backgroundColor: "#001F4C",
        borderRadius: 10,
    },
});

export default Apply1;
