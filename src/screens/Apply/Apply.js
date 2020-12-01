import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import Toast from 'react-native-simple-toast';

class Apply extends React.Component {
    state = {
        job: {},
        qualifications: [],
        roles: [],
        skills: null,
        resume: false,
        coverLetter: false
    };

    unsubscribe1 = null;
    unsubscribe2 = null;
    unsubscribe3 = null;

    componentDidMount() {
        let params = this.props.navigation.state.params
        this.setState({ job: params });

        // Career history
        this.unsubscribe1 = firestore().collection("experience").where("userId", "==", (auth().currentUser || {}).uid)
            .onSnapshot(querySnapshot => {
                let temp = [];
                querySnapshot.forEach(documentSnapshot => {
                    temp.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id
                    });
                });
                this.setState({ roles: temp });
            });

        // Education
        this.unsubscribe2 = firestore().collection("education").where("userId", "==", (auth().currentUser || {}).uid)
            .onSnapshot(querySnapshot => {
                let temp = [];
                querySnapshot.forEach(documentSnapshot => {
                    temp.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id
                    });
                });
                this.setState({ qualifications: temp });
            });

        // Skills
        this.unsubscribe3 = firestore().collection("skills").doc((auth().currentUser || {}).uid)
            .onSnapshot((documentSnapshot) => {
                this.setState({ skills: documentSnapshot.data().skills });
            });
    };

    componentWillUnmount() {
        this.unsubscribe1();
        this.unsubscribe2();
        this.unsubscribe3();
    };

    handleApply = () => {
        const { job, resume, coverLetter } = this.state;
        firestore().collection('jobs').doc(job.key).update({
            applied: firestore.FieldValue.arrayUnion((auth().currentUser || {}).uid)
        }).then(() => {
            this.props.navigation.goBack();
            Toast.show('Application Submitted');
        });
    };

    renderRoles = (item) => {
        return (
            <View style={styles.item}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.job}</Text>
                <Text>{item.company}</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text>{`${moment(item.startDate.toDate()).format('MMM Do YYYY')} - `}</Text>
                    {(item.endDate == null)
                        ? <Text>Present</Text>
                        : <Text>{moment(item.endDate.toDate()).format('MMM Do YYYY')}</Text>
                    }
                </View>
            </View>
        )
    };

    renderQualifications = (item) => {
        return (
            <View style={styles.item}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.course}</Text>
                <Text>{item.institution}</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    {(item.complete == true)
                        ? <Text>Graduated </Text>
                        : <Text>Graduating </Text>
                    }
                    {(item.date == null)
                        ? <Text></Text>
                        : <Text>{moment(item.date.toDate()).format('MMM Do YYYY')}</Text>
                    }
                </View>
            </View>
        )
    };

    renderSkills = (item) => {
        return (
            <View style={styles.item2}>
                <Text style={{ color: 'white', alignSelf: "center", flex: 1, textAlign: "center", marginHorizontal: 10 }}>{item}</Text>
            </View>
        )
    };

    render() {
        const { job, resume, coverLetter, qualifications, skills, roles } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* <Text style={styles.title}>Documents for this application</Text>
                    <Text style={styles.intro}>{`You can choose to add a cover letter and a resume to your application.`}</Text>
                    <View style={styles.header}>
                        <Text style={styles.resume}>Resume</Text>
                        <CheckBox value={resume}
                            onValueChange={newValue => this.setState({ resume: newValue })}
                        />
                        <Text style={styles.resume}>Cover letter</Text>
                        <CheckBox value={coverLetter}
                            onValueChange={newValue => this.setState({ coverLetter: newValue })}
                        />
                    </View> */}
                    <Text style={styles.title}>
                        Your SEEK Profile is sent with your application
                    </Text>
                    <Text>
                        {`In addition to the information in this application, ${job.businessName}`}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name='dot-single' size={20} />
                        <Text>Career history</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name='dot-single' size={20} />
                        <Text>Education</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name='dot-single' size={20} />
                        <Text>Skills</Text>
                    </View>
                    <Text style={[styles.title, { marginTop: 40 }]}>Career history</Text>
                    <FlatList style={styles.list} data={roles}
                        renderItem={({ item }) => this.renderRoles(item)}
                        keyExtractor={item => item.key} />
                    <Text style={[styles.title, { marginTop: 40 }]}>Education</Text>
                    <FlatList style={styles.list} data={qualifications}
                        renderItem={({ item }) => this.renderQualifications(item)}
                        keyExtractor={item => item.key} />
                    <Text style={[styles.title, { marginTop: 40 }]}>Skills</Text>
                    <FlatList style={styles.list2} data={skills}
                        renderItem={({ item }) => this.renderSkills(item)}
                        keyExtractor={(item, index) => index.toString()} />
                </ScrollView>
                <TouchableOpacity style={styles.continue} onPress={this.handleApply}>
                    <Text style={{ color: 'white' }}>Apply</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    intro: {
        marginBottom: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resume: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16
    },
    upload: {
        color: 'blue'
    },
    list: {

    },
    item: {
        backgroundColor: "#c2f1ff",
        padding: 10,
        marginVertical: 10
    },
    list2: {
        marginHorizontal: 10,
        marginBottom: 40
    },
    item2: {
        minWidth: 100,
        height: 40,
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: "#003787",
        marginVertical: 5
    },
    continue: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        backgroundColor: "#001F4C",
        borderRadius: 10,
    },
});

export default Apply;
