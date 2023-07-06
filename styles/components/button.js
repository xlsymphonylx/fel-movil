import { StyleSheet } from "react-native";

export const buttonStyles = (padding, color) => {
  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      padding: padding || 14,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: color || "#36b9cc",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      padding: 0,
      margin: 0,
      color: "white",
    },
  });
};
