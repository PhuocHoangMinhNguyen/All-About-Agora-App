import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import CheckBox from '@react-native-community/checkbox';

class Search extends React.Component {
    state = {
        keywords: '',
        location: '',
        moreOptions: false,
    };

    handleClearAll = () => {

    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        const { keywords, location, moreOptions } = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={this.handleClearAll}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Clear all</Text>
                </TouchableOpacity>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Enter keywords</Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onChangeText={keywords => this.setState({ keywords })}
                            value={keywords} />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Enter suburbs, city, or region</Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onChangeText={location => this.setState({ location })}
                            value={location} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>More options</Text>
                        <CheckBox value={moreOptions} tintColors='white'
                            onValueChange={newValue => this.setState({ moreOptions: newValue })}
                        />
                    </View>
                    {moreOptions == false
                        ? <Text style={{ color: 'white' }}>Check box OFF</Text>
                        : <Text style={{ color: 'white' }}>Check box ON</Text>
                    }
                </View>
                <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
                    <Text style={{ color: 'white' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#151734'
    },
    form: {
        flex: 1,
    },
    inputTitle: {
        marginTop: 20,
        color: "white",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "white",
    },
    submit: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        backgroundColor: "#FF0046",
        borderRadius: 10,
    }
});

export default Search