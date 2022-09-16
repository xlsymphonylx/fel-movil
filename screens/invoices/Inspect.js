import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Inspect() {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: "white",
      marginVertical: 3,
      textAlign: "left",
      margin: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      borderRadius: 10,
    },
    title: {
      fontWeight: "bold",
    },
    text: {
      fontSize: 16,
      paddingVertical: 2,
    },
  });

  return (
    <View>
      {" "}
      <Text style={styles.text}>
        <Text style={styles.title}>Cliente:</Text> VILLATORO BANCES LUIS DAVID
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Total:</Text> 109.78
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Moneda:</Text> GTQ
      </Text>
      <Text style={[styles.text]}>
        <Text style={styles.title}>No:</Text> 372
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Fecha:</Text> 13/06/2022 17:34:53
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Estado:</Text> CERTIFICADA
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Completada:</Text> COMPLETADA
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Usuario:</Text> Administrator
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Cliente:</Text> VILLATORO BANCES LUIS DAVID
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Items:</Text> 8
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>IVA:</Text> 11.78
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Total:</Text> 109.78
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Moneda:</Text> GTQ
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Tipo:</Text> FACT
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>Tipo Pago:</Text> Efectivo
      </Text>
    </View>
  );
}

export default Inspect;
