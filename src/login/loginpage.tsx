/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert , TouchableOpacity} from 'react-native';


const LoginPage = () => {
    const [usernameText, onChangeUsernameText] = React.useState<string>("");
    const [passwordText, onChangePasswordText] = React.useState<string>("");

    return (
        <View style={
            styles.loginPage
        }>
            <View style={
                styles.loginColumn
            }>
                <Text style={
                    styles.appName
                }>
                    CIRCLE
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
                    autoCorrect={false}
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
                    autoCorrect={false}
                >   
                </TextInput>
                <TouchableOpacity style={styles.loginButton} onPress={() => {Alert.alert(usernameText + "" + passwordText)}}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    appName: {
        fontSize: 45,
        fontWeight: "800",
        letterSpacing: 10,
        lineHeight: 100,
        paddingBottom: "60%",

    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "700",
        letterSpacing: 2.4   ,
        lineHeight: 23,
        paddingTop: "6%",
    },
    inputBox: {
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        borderRadius: 30,
        borderStyle: "solid",
        borderWidth: 1,
        height: "5%",
        marginTop: 5,
        padding: 10,
        width: "100%",
    },
    loginButton: {
        backgroundColor: "#000000",
        borderRadius:30,
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        margin: 10,
        width: "80%",
    },
    loginColumn: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "70%",
        
    },
      loginPage: {
        backgroundColor: "#E5E5E5",
        flexDirection: 'row',
        height: "100%",
        justifyContent: "center",
        width: "100%"
    },
    
  
  
})


export default LoginPage;
