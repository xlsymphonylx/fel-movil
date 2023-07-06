import { buttonStyles } from "../../styles/components/button";
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
  const styles = buttonStyles(padding, color);

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
