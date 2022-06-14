import React from "react"
import { Alert, Button, Pressable, ScrollViewBase, StyleSheet, Text, View } from "react-native"

const HomePage = () => {
    return (
        <View style={styles.homepageContainerColumn} >
            <View style={{paddingBottom: 40}}>
                <Text style={styles.titleText}> FIND YOUR </Text>
                <Text style={styles.titleTextBig}>CIRCLE</Text>
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
    loginButton: {
        color: "red",
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

    }
  });


export default HomePage