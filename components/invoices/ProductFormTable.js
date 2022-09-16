import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductTableItem from "./ProductTableItem";

function ProductFormTable({ setModal, setId }) {
  const DATA = [
    { id: 1, title: "lorem", subtitle: "lorem" },
    { id: 2, title: "lorem", subtitle: "lorem" },
    { id: 3, title: "lorem", subtitle: "lorem" },
    { id: 4, title: "lorem", subtitle: "lorem" },
    { id: 5, title: "lorem", subtitle: "lorem" },
    { id: 6, title: "lorem", subtitle: "lorem" },
    { id: 7, title: "lorem", subtitle: "lorem" },
    { id: 8, title: "lorem", subtitle: "lorem" },
  ];
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      maxHeight: 135,
      marginTop: 10,
    },
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={() => (
          <ProductTableItem
            onPress={() => {
              setModal(true);
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ProductFormTable;
