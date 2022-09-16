import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function InputWithIcon({
  icon,
  placeholder,
  value,
  setValue,
  secureText,
  style,
  inputStyle,
  textColor,
}) {
  const styles = StyleSheet.create({
    passwordContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "#C8C8C8",
      backgroundColor: "#fff",
      borderRadius: 5,
      padding: 5,
      alignItems: "center",
      ...style,
    },
    inputStyle: {
      flex: 1,
      paddingLeft: 10,
      fontSize: 16,
      ...inputStyle,
    },
  });

  return (
    <View style={styles.passwordContainer}>
      <FontAwesomeIcon icon={icon} size={16} />
      <TextInput
        style={styles.inputStyle}
        secureTextEntry={secureText}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
}
