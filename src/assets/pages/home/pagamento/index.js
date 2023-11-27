import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function Pagamento({handLeClose}) {
    
  return(
    <View style={styles.container}>
      <View style={styles.barra}>
        <Text style={styles.text}>Pagamento</Text>

      </View>

      <Image
      source={require("../../../../assets/qrcode.jpg")}
      style={styles.logo}
    />

    <TouchableOpacity style={styles.voltar} onPress={handLeClose}>
      <Text style={styles.textVolta}>Voltar</Text>
      
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
    backgroundColor: "#32CD32",
    padding: 6,
    marginTop: 260,
    borderRadius: 8,
    justifyContent: 'center',
  },
  barra:{
    backgroundColor: "#32CD32",
    padding: 30,
    marginBottom: 15,
    alignItems: "center",
    width: "100%",
  },
  text:{
    fontSize: 25,
    
    color: "#FFF",
  },
  logo:{
    marginTop: 80,
    borderRadius: 8,
  },
  textVolta:{
    color: "#FFF", 
    width: "70%", 
    fontSize: 25,
  },
})