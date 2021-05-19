import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

function FingerprintScreen(props) {
    return (
        <div>
            
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#FFFAFAn",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    topBanner: {
      flex: 1,
      color: "#4169E1",
    },
    midBanner: {
      flex: 2,
      color: "#FFFAFAn",
    },
    btmBanner: {
      flex: 1,
      color: "#4169E1",
    },
    textMain: {
      color: "#4169E1",
      fontSize: 20,
    },
    textBanner: {
      color: "#FFFAFAn",
      fontSize: 25,
    },
  });

export default FingerprintScreen;