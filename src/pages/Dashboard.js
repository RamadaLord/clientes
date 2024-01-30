import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { styles } from "../style/styles";

export default function Dashboard() {
  
  const [respNome, setRespNome] = useState("");
  const [respToken, setRespToken] = useState("");

  async function handleAsyncNome() {
    const iNome = await AsyncStorage.getItem('@nome')
    const nome = JSON.parse(iNome)
    setRespToken('')
    setRespNome(nome)
    // return alert(nusuario); 
  }
  async function handleAsyncSenha() {
    const iToken = await AsyncStorage.getItem('@token')
    const token = JSON.parse(iToken)
    setRespNome('')
    setRespToken(token)
    // return alert(senha);
  }

  async function AsyncClear(){
    await AsyncClear.removeItem('@nome','@token')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Dashboard</Text>
        <Text>{respNome}</Text>
        <Text>{respToken}</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}