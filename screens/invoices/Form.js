import React, { useState } from "react";
import { View } from "react-native";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/common/Button";
import ModalItems from "../../components/invoices/ModalItems";
import ProductForm from "../../components/invoices/ProductForm";
import ProductFormTable from "../../components/invoices/ProductFormTable";
import styles from "../../styles/invoices/form";
import invoiceService from "../../services/invoices/invoiceService";
import InputWithIconButton from "../../components/common/InputWithIconButton";
function Form() {
  const [nit, setNit] = useState("");
  const [paymentSearch, setPaymentSearch] = useState("");
  const [paymentss, setpayments] = useState([]);
  const [clientSearch, setClientSearch] = useState("");
  const [client, setClient] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const searchClients = async () => {
    try {
      setIsLoading(true);
      const { data } = await invoiceService.clients(clientSearch);
      setClient(data[0]);
      setClientSearch(data[0].nombre);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

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
      <InputWithIconButton
        placeholder="Prueba"
        disabled={client}
        icon={faSearch}
        value={clientSearch}
        message={client ? "Error" : null}
        error={true}
        setValue={setClientSearch}
        onPress={searchClients}
      ></InputWithIconButton>
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
