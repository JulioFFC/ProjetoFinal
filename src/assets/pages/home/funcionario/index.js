import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function Funcionario({ geraServico, servico, handLeClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Text style={styles.text}>Serviços</Text>
      </View>

      <View style={styles.funcio}>
        <Text style={styles.textFunc}>{servico}</Text>
      </View>

    <View style={styles.opcao}>
      <TouchableOpacity style={styles.taman}>
        <Text style={styles.buttonText}>Aceitar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taman}>
        <Text style={styles.buttonText}>Recusar</Text>
      </TouchableOpacity>
      
    </View>
     
    <TouchableOpacity style={styles.voltar} onPress={handLeClose}>
      <Text style={styles.textFunc}>Voltar</Text>
      
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    alignItems: 'center',
  },
  voltar:{
    backgroundColor: "#F4A460",
    padding: 6,
    marginTop: 380,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textFunc:{
    color: "#FFF", 
    width: "70%", 
    fontSize: 25,
  },
  funcio:{
    backgroundColor: "#F4A460",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    width: "95%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150,
  },
  taman:{
    backgroundColor: "#F4A460",
    padding: 5,
    marginBottom: 15,
    marginRight: 1,
    borderRadius: 8,
    width: "50%",
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
  },
  opcao:{
    backgroundColor: "#F3F3FF",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    
  },
  barra:{
    backgroundColor: "#F4A460",
    padding: 30,
    marginBottom: 15,
    alignItems: "center",
    width: "100%",
  },
  text:{
    fontSize: 30,
    
    color: "#FFF",
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20,
    
  }
})