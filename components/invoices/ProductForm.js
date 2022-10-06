import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../styles/global";
import Button from "../common/Button";
import Select from "react-select";
import invoiceService from "../../services/invoices/invoiceService";
import { debounce } from "lodash";

function ProductForm({ setProduct, buttonPadding, buttonTextStyle }) {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: "#C8C8C8",
      borderRadius: 5,
      padding: 5,
      paddingLeft: 10,
      marginTop: 6,
    },

    container: {
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#fff",
      borderColor: "#C8C8C8",
      borderWidth: 1,
      marginTop: 6,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 6,
    },
    title: {
      textAlign: "center",
      fontWeight: "bold",
    },
  });
  const searchProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await invoiceService.products(productSearch);
      setProducts(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedSearchProducts = debounce(searchProducts, 2000);

  const [productSearch, setProductSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const customStyles = {
    control: (base) => ({
      ...base,
      fontFamily: "sans-serif",
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "sans-serif",
    }),
  };

  useEffect(() => {
    if (!!productSearch) {
      debouncedSearchProducts();
    }
  }, [productSearch]);

  return (
    <View style={styles.container}>
      <View style={globalStyles.selectContainer}>
        <Select
          options={products}
          styles={customStyles}
          onInputChange={(value) => setProductSearch(value)}
          getOptionValue={(producto) => producto.codigo_producto}
          getOptionLabel={(producto) => producto.nombre}
          noOptionsMessage={() => "No encontrado"}
          placeholder="Producto"
          isLoading={isLoading}
        />
      </View>
      <TextInput style={styles.input} placeholder="Cantidad" />
      <View style={styles.buttonContainer}>
        <Button
          title="Agregar"
          padding={buttonPadding}
          textStyle={buttonTextStyle}
          color="#29A645"
        />
      </View>
    </View>
  );
}

export default ProductForm;
