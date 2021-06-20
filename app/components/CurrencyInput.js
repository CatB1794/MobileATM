import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput, View, Button, ActivityIndicator } from "react-native";

import styles from "./styles";
import { fetchCurrencyLatest, convertCurrencyAPI } from "./CurrencyAPI";

const CurrencyInput = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [baseAmnt, setBaseAmnt] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [quoteAmnt, setQuoteAmnt] = useState("");
  const [quoteCurrency, setQuoteCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCurrencyLatest().then((list) => setCurrencyList(list));
  }, []);

  const convertCurrency = (amount, baseCurrency, quoteCurrency) => {
    setLoading(true);
    convertCurrencyAPI(amount, baseCurrency, quoteCurrency).then((data) => {
      const { rates } = data;
      setQuoteAmnt(String(rates[quoteCurrency]));
      setLoading(false);
    });
  };

  return (
    <View>
      <View style={styles.currencyContainer}>
        <DropDownPicker
          style={styles.btnCurrency}
          onChangeText={(value) => setBaseCurrency(value)}
          open={open}
          value={baseCurrency}
          items={currencyList.map((currency) => ({
            label: currency,
            value: currency,
          }))}
          setOpen={setOpen}
          setValue={setBaseCurrency}
        />
        <View>
          <TextInput
            style={styles.txtCurrency}
            keyboardType="numeric"
            onChangeText={(value) => setBaseAmnt(value)}
            value={baseAmnt}
          />
        </View>
      </View>
      <View style={styles.currencyContainer}>
        <DropDownPicker
          style={styles.btnCurrency}
          onChangeText={(value) => setQuoteCurrency(value)}
          open={quoteOpen}
          value={quoteCurrency}
          items={currencyList.map((currency) => ({
            label: currency,
            value: currency,
          }))}
          setOpen={setQuoteOpen}
          setValue={setQuoteCurrency}
        />
        <View>
          <TextInput
            style={styles.txtCurrency}
            editable={false}
            value={quoteAmnt}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {loading ? (
          <ActivityIndicator color="#000000" size="large" />
        ) : (
          <Button
            onPress={() =>
              convertCurrency(baseAmnt, baseCurrency, quoteCurrency)
            }
            title="Convert"
          />
        )}
      </View>
    </View>
  );
};

export default CurrencyInput;
