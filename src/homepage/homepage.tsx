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
    homepageContainerColumn: {
        flex: 1,
        alignContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#E5E5E5',
        
    },
    homepageContainerRow: {
        paddingBottom: 40,

    },
    loginButton: {
        backgroundColor: "#4ABED8",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius:30,
        height: 50,
        margin: 10,
    },
    registerButton: {
        backgroundColor: "#000000",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius:30,
        height: 50,
        margin: 10,
    },
    titleText: {
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 23,
        textAlign: "center",
        letterSpacing: 2,
    },
    titleTextBig: {
        fontWeight: "700",
        fontSize: 50,
        lineHeight: 58.7,
        letterSpacing: 10,
    },
    buttonText: {
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: 2.4,
        paddingTop: "3.5%",
        color: "#FFFFFF",
    }

  });


export default HomePage