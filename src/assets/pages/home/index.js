import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Routes } from "./src/assets/routes";

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  function botaoFuncionario(){
    setModalVisible(true);

  }

  function botaoCliente(){
    setModalVisible2(true);

  }

  return(
    <View style={styles.container}>
      <Image
      source={require("../../../assets/images.png")}
      style={styles.logo}
    />

    <Text style={styles.text}>Bem Vindo!</Text>

    <TouchableOpacity style={styles.button} onPress={botaoFuncionario}>
      <Text style={styles.buttonText}>Eletricista</Text>
      <Modal visible={modalVisible} animationType='fade'>
        <Funcionario handLeClose={() => setModalVisible(false)}/>
      </Modal>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={botaoCliente}>
      <Text style={styles.buttonText}>Cliente</Text>
      <Modal visible={modalVisible2} animationType='fade'>
        <Cliente handLeClose={() => setModalVisible2(false)}/>
      </Modal>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 25,
    marginBottom: 20,
  },
  logo:{
    marginBottom: 20,
  },
  button:{
    backgroundColor: "#392de9",
    width: "60%",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 25,
  }
})