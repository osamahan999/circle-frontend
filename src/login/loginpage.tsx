import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Pressable } from 'react-native';


const LoginPage = () => {
    const [usernameText, onChangeUsernameText] = React.useState<string>();
    const [passwordText, onChangePasswordText] = React.useState<string>();

    return (
        <View style={
            styles.loginpage
        }>
            <View style={
                styles.loginColumn
            }>
                <Text style={
                    styles.loginTitleView
                }>
                    LOGIN
                </Text>

                <TextInput 
                    style={
                        styles.inputBox
                    }
                    placeholder="Username"
                    onChangeText={
                        (text) => onChangeUsernameText(text)
                    }
                    autoCapitalize="none"
                    autoCorrect = "none"
                    value={usernameText}
                >        
                </TextInput>
                <TextInput 
                    style={
                        styles.inputBox
                    }
                    placeholder="Password"
                    onChangeText={(text) => onChangePasswordText(text)}
                    value={passwordText}
                    autoCapitalize="none"
                    autoCorrect = "none"
                >   
                </TextInput>
                <Pressable style={styles.loginButton} onPress={() => {Alert.alert(usernameText + "" + passwordText)}}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    loginpage: {
        width: "100%",
        height: "100%",
        backgroundColor: "#E5E5E5",
        flexDirection: 'row',
        justifyContent: "center"
    },
    loginColumn: {
        width: "70%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        
    },
    loginTitleView: {
        fontWeight: "700",
        fontSize: 35,
        lineHeight: 35,
        letterSpacing: 2
    },
    inputBox: {
        width: "100%",
        height: "5%",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000000",
        borderRadius: 30,
        padding: 10,
    },
    buttonText: {
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: 2.4,
        paddingTop: "6%",
        color: "#FFFFFF",
    },
    loginButton: {
        backgroundColor: "#000000",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius:30,
        height: 50,
        margin: 10,
        width: "80%",
    },
})


export default LoginPage;
