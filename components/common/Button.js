import { Pressable, StyleSheet, Text } from "react-native";

function Button({
  title,
  onPress,
  color,
  style,
  textStyle,
  padding,
  disabled,
}) {
  const styles = StyleSheet.create({
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

  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
}

export default Button;
