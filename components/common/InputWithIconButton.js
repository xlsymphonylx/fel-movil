import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function InputWithIconButton({
  placeholder,
  onPress,
  disabled,
  icon,
  value,
  setValue,
  message,
  error,
}) {
  const styles = StyleSheet.create({
    input: {
      flex: 1,
      margin: 7,
      fontSize: 17,
    },
    container: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: message ? (error ? "red" : "#29A645") : "#C8C8C8",
      backgroundColor: "#fff",
      borderRadius: 5,
      padding: 1,
      paddingRight: 10,
      alignItems: "center",
    },
    messageText: {
      paddingLeft: 10,
      fontSize: 14,
    },
    successText: {
      color: "#29A645",
    },
    errorText: {
      color: "red",
    },
  });
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          editable={!disabled}
        ></TextInput>

        <Pressable onPress={onPress} disabled={disabled}>
          <FontAwesomeIcon icon={icon} size={16} />
        </Pressable>
      </View>
      {message ? (
        <Text
          style={[
            styles.messageText,
            error ? styles.errorText : styles.successText,
          ]}
        >
          {message}
        </Text>
      ) : null}
    </>
  );
}

export default InputWithIconButton;
