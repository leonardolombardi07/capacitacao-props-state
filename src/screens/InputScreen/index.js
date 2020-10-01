import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function InputScreen() {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        /*
        a prop value guarda o valor do state email (isso garante
        que o valor digitado é sempre igual ao state, o que denonimina-se
        "componente controlado")
        
        a prop onChangeText recebe uma função com o novo valor
        do texto como parâmetro 
        */
        value={email}
        onChangeText={(newText) => setEmail(newText)}
        placeholder="E-mail"
        style={styles.textInput}
      />
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
  textInput: {
    width: 300,
    height: 45,
    backgroundColor: "pink",
    paddingHorizontal: 5,
    marginVertical: 10,
    color: "white",
    borderRadius: 3,
  },
  text: {
    fontSize: 20,
    color: "red",
  },
});
