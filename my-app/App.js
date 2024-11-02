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
      <SignUp AddAccount={addAccount}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
