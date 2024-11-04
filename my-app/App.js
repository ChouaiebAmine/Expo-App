import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from "./SignUp"




export default function App() {

  const [Accounts,setAccount] = useState([])

  const addAccount = (newAccount) =>{
    setAccount([...Accounts,{...newAccount,id:Date.now(),done:false}])
  }

  return (

    <View style={styles.container}>
      <Text style={styles.title} >Sign Up Form</Text>
      <SignUp AddAccount={addAccount}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',

  },

  title:{
    fontWeight:'bold',
    fontSize:30,
    padding:100,
    color:'#FFF',
    
  }
});
