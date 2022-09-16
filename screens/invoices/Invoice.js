import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
function Invoice({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: "white",
      textAlign: "center",
    },
    fontSize: {
      fontSize: 19,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.title, styles.fontSize]}>No:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>372</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Fecha:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>
        13/06/2022 17:34:53
      </Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Estado:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>CERTIFICADA</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Completada:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>COMPLETADA</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Usuario:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>Administrator</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Cliente:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>
        VILLATORO BANCES LUIS DAVID
      </Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Items:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>8</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>IVA:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>11.78</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Total:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>109.78</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Moneda:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>GTQ</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Tipo:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>FACT</Text>
      <Text style={[globalStyles.title, styles.fontSize]}>Tipo Pago:</Text>
      <Text style={[globalStyles.text, styles.fontSize]}>Efectivo</Text>
    </View>
  );
}

export default Invoice;
