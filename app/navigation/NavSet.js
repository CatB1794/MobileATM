import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NFCScreen from "../screens/NFCScreen";
import FingerprintScreen from "../screens/FingerprintScreen";
import MainMenu from "../screens/MainMenu";
import CWScreen from "../screens/CWScreen";
import OtherAmount from "../screens/OtherAmount";
import CurrencyEx from "../screens/CurrencyEx";
import CDScreen from "../screens/CDScreen";
import ChqDepScreen from "../screens/ChqDepScreen";
import AppCamera from "../screens/AppCamera";
import AccountBalance from "../screens/AccountBalance";
import ReceiptOption from "../screens/ReceiptOption";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator
    initialRouteName="NFC"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="NFC" component={NFCScreen} />
    <Stack.Screen name="Finger" component={FingerprintScreen} />
    <Stack.Screen name="Main" component={MainMenu} />
    <Stack.Screen name="CWS" component={CWScreen} />
    <Stack.Screen name="Other" component={OtherAmount} />
    <Stack.Screen name="CurEx" component={CurrencyEx} />
    <Stack.Screen name="CDS" component={CDScreen} />
    <Stack.Screen name="ChqDep" component={ChqDepScreen} />
    <Stack.Screen name="Cam" component={AppCamera} />
    <Stack.Screen name="Balance" component={AccountBalance} />
    <Stack.Screen name="Receipt" component={ReceiptOption} />
  </Stack.Navigator>
);

export default Navigator;
