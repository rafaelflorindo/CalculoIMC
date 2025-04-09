import React, { useState } from "react";
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

export default CalculoIMC = () => {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [message, setMessage] = useState();

    const calcularIMC = () =>{
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        
        if (!pesoNum || !alturaNum) {
            setResultado("Preencha os campos corretamente!");
            return;
        }
        const imc = pesoNum / (alturaNum * alturaNum);
        
        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 24.9) classificacao = "Peso normal";
        else if (imc < 29.9) classificacao = "Sobrepeso";
        else if (imc < 34.9) classificacao = "Obesidade grau 1";
        else if (imc < 39.9) classificacao = "Obesidade grau 2";
        else classificacao = "Obesidade grau 3 (severa)";
        setMessage(`IMC: ${imc.toFixed(0)} - ${classificacao}`);
    }

return(
    <View style={styles.container}>
       <Text style={styles.title}>Calculadora de IMC</Text>
       <TextInput 
        style={styles.input}
        placeholder="Peso (KG)"
        keyboardType="numeric"
        value = {peso}
        onChangeText={setPeso}
       />
    
       <TextInput 
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value = {altura}
        onChangeText={setAltura}
       />

       <TouchableOpacity onPress={calcularIMC} style={styles.button}>
            <Text style={styles.buttonText}>Calcular</Text>     
       </TouchableOpacity>
       <View style={styles.resultadoCard}>
        {message ? <Text style={styles.result}>{message}</Text> : null}
        </View>
        <Text style={styles.versao}>Versão: 1 - Prof. Rafael Florindo</Text>
    </View>
);
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItens: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        height: 250
    },
    button: {
        backgroundColor: "#007bff", 
        paddingVertical: 12,
        paddingHorizontal: 30, 
        borderRadius: 8, 
        marginTop: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign:'center'
    },
    input: {
        width: "80%", 
        height: 40, 
        borderColor: "#ccc",
        borderWidth: 1, 
        borderRadius: 8, 
        marginBottom: 10,
        paddingHorizontal: 10, 
        backgroundColor: "#fff",
        minWidth: 250, 
        minHeight: 40,
    },
    buttonText: {
        color: "#fff", fontSize: 16, fontWeight: "bold",
    },
    result: {
        marginTop: 20, fontSize: 18, fontWeight: "bold", color: "#333",
    },  
    resultadoCard: {
        borderRadius: 10,
        margin: 10,
        padding: 10,
      },
    versao:{
    position: 'absolute',
    fontWeight:'bold',
    bottom: 10,
    fontSize: 15,
    color: '#ffffffaa',
    textAlign: 'center',
    width: '100%',
  }
});