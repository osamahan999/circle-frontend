import React from "react"
import { Alert, Button, Pressable, ScrollViewBase, StyleSheet, Text, View } from "react-native"

const HomePage = () => {
    return (
        <View style={styles.homepageContainerColumn} >
            <View style={styles.homepageContainerRow}>
                <Text style={styles.titleText}> FIND YOUR </Text>
                <Text style={styles.titleTextBig}>CIRCLE</Text>
                <Pressable style={styles.loginButton} onPress={() => {Alert.alert("Log in")}}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
                <Pressable style={styles.registerButton} onPress={() => {Alert.alert("Register")}}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </Pressable>
            </View>
        </View>
    ) ;
} ;

const styles = StyleSheet.create({
    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "700",
        letterSpacing: 2.4,
        lineHeight: 23,
        paddingTop: "3.5%",
    },
    homepageContainerColumn: {
        alignContent: "center",
        alignItems: "center",
        backgroundColor: '#E5E5E5',
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        
    },
    homepageContainerRow: {
        paddingBottom: 40,

    },
    loginButton: {
        backgroundColor: "#4ABED8",
        borderRadius:30,
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        margin: 10,
    },
    registerButton: {
        backgroundColor: "#000000",
        borderRadius:30,
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        margin: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "400",
        letterSpacing: 2,
        lineHeight: 23,
        textAlign: "center",
    },
    titleTextBig: {
        fontSize: 50,
        fontWeight: "700",
        letterSpacing: 10,
        lineHeight: 58.7,
    }

  });


export default HomePage