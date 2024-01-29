import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiLocal from "../../api/apiLocal"; 
import { styles } from "../../style/styles"; 

export default function Home() {
  const navigation = useNavigation();
  const [nusuario, setNusuario] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    try {
      const resposta = await apiLocal.post("/AuthLogIn", {
        nusuario,
        senha,
      });
      navigation.navigate("Dashboard");
      await AsyncStorage.setItem("@nome", JSON.stringify(resposta.data.nome));
      await AsyncStorage.setItem("@token", JSON.stringify(resposta.data.token));
    } catch (error) {
      console.log(error);
    }

    if (!nusuario || !senha) {
      return alert("Campos Em Branco");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.cabecalho}>Login</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text>Usuario:</Text>
        <TextInput
          value={nusuario}
          style={styles.input}
          onChangeText={(text) => setNusuario(text)}
          placeholder="Digite O Seu Usuario"
        />
      </View>
      <View>
        <Text>Senha:</Text>
        <TextInput
          value={senha}
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          placeholder="Digite Sua Senha"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
