import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { FontAwesome } from '@expo/vector-icons';

const Register = () => {

    const [text, onChangeText] = React.useState("Useless Text");

  return (
    <>
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.heading}>Welcome Back!</Text>
                    <View style={styles.formGroup}>
                        {/* <Text style={styles.label}>Email</Text> */}
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value="12366"
                            placeholder="Email"
                            // keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        {/* <Text style={styles.label}>Password</Text> */}
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value="12366"
                            placeholder="Password"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Button
                        // onPress={onPressLearnMore}
                        title="Login"
                        color="skyblue"
                        style={styles.loginbtn}
                        />
                    </View>
                    <Text style={{color: 'lightgrey', textAlign:'center', marginTop:18}}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Don't have an account?
                    </Text>

                    <View style={styles.hr} />
                    <View
                        style={{
                        flexDirection: "column",
                        height: 100,
                        }}
                    >
                        <View style={styles.social}>
                            <FontAwesome name="facebook-square"  size={24} color="black" />
                            <Text style={{ marginLeft:10 }}>Continue with facebook</Text>
                        </View>
                        <View style={styles.social}>
                            <FontAwesome name="google" size={24} color="black" />
                            <Text style={{ marginLeft:15, marginRight:15 }}>Continue with Google</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        padding: 10,
        justifyContent:'center',
    },
    content:{
        minHeight:"auto",
        width:"100%",
        marginHorizontal:"auto",
        
    },
    card:{
        padding:5,
        paddingVertical:30,
        backgroundColor:'black',
        height:"auto",
        backgroundColor:'white',
        borderRadius:10,
        // elevation:5
    },
    input: {
        height: 50,
        borderColor:"white",
        backgroundColor:"#EEEEEE",
        // margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
    },
    formGroup:{
        margin:10,

    },
    label:{
        marginVertical:4
    },
    heading:{
        fontSize:22,
        // fontWeight:500,
        textAlign:'center',
        marginBottom:20,
    },
    hr:{
        marginVertical:25,
        height:1,
        width:"80%",
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:'lightgrey'
    },
    social:{
        backgroundColor: "#EEEEEE",
        padding:10,
        margin:5,
        borderRadius:7,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Register
