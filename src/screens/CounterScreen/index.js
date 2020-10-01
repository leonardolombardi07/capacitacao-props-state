import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CounterScreen() {
  /* 
    useState é uma função do React que permite
    criar um tipo de variável especial, o state. No exemplo
    abaixo, count é o valor do state e setCount é a função
    que deve ser utilizada para atualizar o valor de count.
    O parâmetro da função useState (zero, no caso abaixo) é
    o valor inicial do state count.
    */
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    /* 
      a única maneira de alterar o valor do state count é 
      utilizando a função setCount, que recebe como parâmetro
      o novo valor do state
      */
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>

      <TouchableOpacity onPress={increaseCount} style={styles.buttonContainer}>
        <Text>Aumentar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decreaseCount} style={styles.buttonContainer}>
        <Text>Diminuir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "green",
  },
  buttonContainer: {
    width: 150,
    height: 45,
    backgroundColor: "#F3833F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginVertical: 10,
  },
});
