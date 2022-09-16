import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../common/Button";
import { globalStyles } from "../../styles/global";

function ModalItems({ modalVisible, setModalVisible }) {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    title: {
      fontWeight: "bold",
    },
    text: {
      fontSize: 16,
      paddingVertical: 2,
      ...globalStyles.accent,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.text]}>
              <Text style={styles.title}>Producto:</Text> Hielo
            </Text>
            <Text style={[styles.text]}>
              <Text style={styles.title}>Cantidad:</Text> 12
            </Text>
            <Text style={[styles.text]}>
              <Text style={styles.title}>Precio:</Text> 1.00
            </Text>
            <Text style={[styles.text]}>
              <Text style={styles.title}>Total:</Text> 12.00
            </Text>
            <Button
              title="Cerrar"
              color="#FE0100"
              style={{ marginTop: 20 }}
              padding={12}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalItems;
