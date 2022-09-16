import {
  faBoxArchive,
  faFile,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/dashboard/Card";
import authService from "../services/auth";

function Dashboard({ navigation, setUser }) {
  const styles = StyleSheet.create({
    container: { height: "90vh", backgroundColor: "#F4F7F8" },
  });

  const logOut = async () => {
    try {
      await authService.logout();
      setUser(undefined);
      navigation.navigate("Inicio");
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Card
        title="Consultar Facturas"
        subtitle="Consulta facturas registradas"
        event={() => navigation.navigate("Tabla")}
        icon={faBoxArchive}
        iconSize={36}
      />
      <Card
        title="Registrar Factura"
        subtitle="Crea facturas FEL"
        icon={faFile}
        iconSize={36}
        event={() => navigation.navigate("Form")}
      />
      <Card
        title="Cerrar Sesion"
        subtitle="Cerrar tu sesion actual"
        tintColor="#FE0100"
        iconColor="#FE0100"
        icon={faRightFromBracket}
        iconSize={36}
        event={() => logOut()}
      />
    </View>
  );
}

export default Dashboard;
