import { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native";


function SignUp(AddAccount){

    const[Email,setEmail] = useState("")
    const[Password,setPassword] = useState("")
    const[Fullname,setName] = useState("")

    const Submit = () =>{
        AddAccount({Email,Password,Fullname})
        setEmail("")
        setPassword("")
        setName("")
    }

    return(
        <View >
            <TextInput 
                placeholder="Email"
                value={Email}
            />
            <TextInput 
                placeholder="Password"
                value={Email}
            />
            <TextInput 
                placeholder="FullName"
                value={Email}
            />
            <Button onPress={Submit} title="Submit" />


        </View>
    )


}

export default SignUp