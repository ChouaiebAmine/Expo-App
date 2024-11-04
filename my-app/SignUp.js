import { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native";


function SignUp({AddAccount}){

    const[Email,setEmail] = useState("")
    const[Password,setPassword] = useState("")
    const[Fullname,setName] = useState("")
    const[address,setaddress] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    

    const Submit = () => {
        if (Email && Password && confirmPassword && Fullname && address) {
            if (Password === confirmPassword) {

                const newUser = { Email, Password, Fullname, address };

                AddAccount(newUser)
                setUserInfo(newUser)
                setSubmitted(true)
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                setName("")
                setaddress("")

            } else {
                alert("Passwords do not match")
            }
        } else {
            alert("Please fill all fields")
        }
    };

    

    return(
        <View style={styles.formContainer} >
            <TextInput 
                placeholder="Email"
                value={Email}
                onChangeText={setEmail}
                placeholderTextColor= "white"
                style ={styles.inputStyle}
            />
            <TextInput 
                placeholder="Password"
                value={Password}
                onChangeText={setPassword}
                placeholderTextColor= "white"
                style ={styles.inputStyle}
                secureTextEntry
            />
            <TextInput 
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholderTextColor= "white"
                style ={styles.inputStyle}
                secureTextEntry
            />
            <TextInput 
                placeholder="FullName"
                value={Fullname}
                onChangeText={setName}
                placeholderTextColor= "white"
                style ={styles.inputStyle}
            />
            <TextInput 
                placeholder="Address"
                value={address}
                onChangeText={setaddress}
                placeholderTextColor= "white"
                style ={styles.inputStyle}
            />
            <Button 
                onPress={Submit}
                title="Submit"
                style ={{backgroundColor:'#c3b360'}}
            />
            {submitted && (
                <View style={styles.welcomeContainer}>
                    <Text style = {styles.welcome}>
                        <Text style={{fontWeight:"bold"}}>~Welcome~</Text>  {"\n\n\n"}
                        <Text style = {styles.key}>Name:</Text>  {userInfo.Fullname}{"\n\n"}
                        <Text style = {styles.key}>Address:</Text> {userInfo.address} {"\n\n"} 
                        <Text style = {styles.key}>Email:</Text>{userInfo.Email} 
                    </Text>
                </View>
            
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        padding: 20,
    },
    inputStyle: {
        color: "white",
        backgroundColor: '#333',
        padding: 10,
        margin: 13,
        borderRadius: 5,
    },
    welcomeContainer: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#333',
        opacity:0.8,
        borderRadius: 5,
    },
    welcome: {
        color: '#fff',
        fontSize: 16,
    },
    key: {
        color: '#c3b360',
    },
  });

export default SignUp