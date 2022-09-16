import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
function ProductTableItem({ onPress }) {
  const styles = StyleSheet.create({
    container: {
      padding: 5,
      borderRadius: 10,
      margin: 3,
    },
    title: {
      fontWeight: "bold",
    },
    text: {
      fontSize: 16,
      paddingVertical: 2,
      ...globalStyles.accent,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        globalStyles.backgroundSecondaryColor,
        globalStyles.shadowBorder,
      ]}
    >
      <Text style={[styles.text]}>
        <Text style={styles.title}>Producto:</Text> Hielo
      </Text>
      <Text style={[styles.text]}>
        <Text style={styles.title}>Total:</Text> 130.00
      </Text>
    </Pressable>
  );
}

export default ProductTableItem;
