import React from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Image, StyleSheet, View, CheckBox, Text } from "react-native";
import Button from "../components/common/Button";
import InputWithIcon from "../components/common/InputWithIcon";
import authService from "../services/auth";

function LogIn({ setUser }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const setUserData = (token) => {
    setUser({ email, password, token });
  };

  const logIn = async () => {
    try {
      const { access_token } = await authService.login({ email, password });
      setUserData(access_token);
    } catch (error) {}
  };
  const styles = StyleSheet.create({
    container: {
      padding: 40,
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    innerContainer: {
      flex: 1,
      backgroundColor: "#fff",
      paddingBottom: 20,
      borderRadius: 20,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      alignItems: "center",
    },
    logo: {
      width: 200,
      height: 58,
      marginTop: 60,
      marginBottom: 120,
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    checkboxLabel: {
      margin: 8,
    },
    errorContainer: {
      margin: 20,
      padding: 20,
      backgroundColor: "#FE0100",
      borderRadius: 10,
    },
    errorText: {
      fontWeight: "bold",
      color: "white",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/icon-sistema.jpg")}
        />
        <InputWithIcon
          icon={faUser}
          placeholder="Email"
          value={email}
          setValue={(value) => setEmail(value)}
        />
        <InputWithIcon
          style={{ marginTop: 30, marginBottom: 30 }}
          icon={faLock}
          placeholder="Contraseña"
          secureText={!isPasswordVisible}
          value={password}
          setValue={(value) => setPassword(value)}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isPasswordVisible}
            onValueChange={setPasswordVisible}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Mostrar Contraseña</Text>
        </View>
        <Button
          title="Iniciar Sesión"
          color="#29A645"
          onPress={logIn}
          disabled={!password || !email}
        />
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default LogIn;
