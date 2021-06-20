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
