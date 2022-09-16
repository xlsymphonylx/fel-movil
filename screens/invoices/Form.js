import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../../components/common/Button";
import ModalItems from "../../components/invoices/ModalItems";
import ProductForm from "../../components/invoices/ProductForm";
import ProductFormTable from "../../components/invoices/ProductFormTable";
import Select from "react-select";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { globalStyles } from "../../styles/global";
import invoiceService from "../../services/invoices/invoiceService";
import { debounce } from "lodash";
import InputWithIcon from "../../components/common/InputWithIcon";
function Form() {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 13,

      borderWidth: 1,
      borderColor: "#C8C8C8",
      borderRadius: 5,
      padding: 10,
    },
    container: {
      padding: 10,
      backgroundColor: "#fff",
      height: "90.4vh",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
    },
    buttonTextStyle: {
      fontSize: 13,
    },
  });

  const [nit, setNit] = useState("");
  const [paymentSearch, setPaymentSearch] = useState("");
  const [paymentss, setpayments] = useState([]);
  const [clientSearch, setClientSearch] = useState("");
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const searchClients = async () => {
    try {
      setIsLoading(true);
      const { data } = await invoiceService.clients(clientSearch);
      setClients(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const debouncedSearchClients = debounce(searchClients, 2000);

  useEffect(() => {
    if (clientSearch) {
      debouncedSearchClients();
    }
  }, [clientSearch]);

  const payments = [
    { value: "Credito", label: "Credito" },
    { value: "Efectivo", label: "Efectivo" },
  ];
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

  return (
    <View style={styles.container}>
      <View style={globalStyles.selectContainer}>
       
        <InputWithIcon
        
          inputStyle={{ color: "black", fontWeight: "bold" }}
          icon={faSearch}
          placeholder="Cliente"
        />
      </View>
   
      <ProductForm
        buttonPadding={12}
        buttonTextStyle={styles.buttonTextStyle}
      />
      <ProductFormTable setModal={setModalVisible} />
      <View style={styles.buttonContainer}>
        <Button
          title="Guardar"
          color="#29A645"
          padding={12}
          style={{ marginRight: 10 }}
          textStyle={styles.buttonTextStyle}
        />
        <Button
          title="Cancelar"
          color="#FE0100"
          padding={12}
          onPress={() => setModalVisible(!modalVisible)}
          textStyle={styles.buttonTextStyle}
        />
      </View>
      <ModalItems
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

export default Form;
