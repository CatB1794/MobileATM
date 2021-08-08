// Code written as a part of Edinburgh Napier University Honours project
// Created on: 28/04/2021 – Last code modification: 30/06/2021
// Caterina Brandani - 40338726

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigator from "./app/navigation/NavSet";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

// image attribution <a href="https://www.vecteezy.com/free-vector/atm-icon">Atm Icon Vectors by Vecteezy</a>
