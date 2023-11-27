import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { Pagamento } from '../pagamento';

export function Cliente({ handLeClose }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [servicoValue, setServico] = useState("");

  function botaoConfirmar() {
    setModalVisible(true);
  }

  function geraServico() {
    let servico ='';
  }

  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Text style={styles.text}>O que você busca ?</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={geraServico(servico ='Instalação resisdencial/Comercial')}
      >
        <Text style={styles.buttonText}>Instalação resisdencial/Comercial</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Segurança Eletrônica</Text>

    </TouchableOpacity>

    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Automação residencial</Text>

    </TouchableOpacity>

    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Instalação/Manutenção Fotovoltaica</Text>

    </TouchableOpacity>

    <Text style={styles.textElet}>Selecione um Eletricista</Text>

    <TouchableOpacity style={styles.funcio}>
    <Image
      source={require("../../../../assets/usuario.png")}
      style={styles.logo}
    />
      <Text style={styles.textFunc}>Eletricista 1</Text>
      
      </TouchableOpacity>
    
    <TouchableOpacity style={styles.funcio}>
    <Image
      source={require("../../../../assets/usuario.png")}
      style={styles.logo}
    />
      <Text style={styles.textFunc}>Eletricista 2</Text>
      
      </TouchableOpacity>

      <TouchableOpacity style={styles.funcio}>
    <Image
      source={require("../../../../assets/usuario.png")}
      style={styles.logo}
    />
      <Text style={styles.textFunc}>Eletricista 3</Text>
      
      </TouchableOpacity>

           
      <View style={styles.opcao}>

      <TouchableOpacity style={styles.taman} onPress={handLeClose}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taman} onPress={botaoConfirmar} >
        <Text style={styles.buttonText}>Confirmar</Text>
      <Modal visible={modalVisible} animationType='fade'>
        <Pagamento handLeClose={() => setModalVisible(false)}/>
      </Modal>
      </TouchableOpacity>
      
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    alignItems: 'center',
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
  taman:{
    backgroundColor: "#6495ED",
    padding: 5,
    marginBottom: 15,
    marginRight: 1,
    borderRadius: 8,
    width: "50%",
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    marginTop: 28,
  },
  textFunc:{
    color: "#FFF", 
    width: "70%", 
    fontSize: 25,
  },
  funcio:{
    backgroundColor: "#6495ED",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    width: "95%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barra:{
    backgroundColor: "#6495ED",
    padding: 30,
    marginBottom: 15,
    alignItems: "center",
    width: "100%",
  },
  text:{
    fontSize: 25,
    
    color: "#FFF",
  },
  textElet:{
    fontSize: 20,
    marginTop: 20,
    color: "#000",
  },
  logo:{
    marginBottom: 0,
    borderRadius: 8,
  },
  button:{
    backgroundColor: "#6495ED",
    width: "100%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 18,
  }
})