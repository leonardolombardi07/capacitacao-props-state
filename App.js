import React from "react";

import InputScreen from "./src/screens/InputScreen";
import CounterScreen from "./src/screens/CounterScreen";

export default function App() {
  /* 
  Descomentar <InputScreen /> se quiser visualizar 
  a tela com o contador
  */

  // return <InputScreen />;
  return <CounterScreen />;
}
