import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import InputWithIcon from "../../components/common/InputWithIcon";
import TableItem from "../../components/invoices/TableItem";
import invoiceService from "../../services/invoices/invoiceService";

function Table({ navigation }) {
  const [invoices, setInvoices] = useState([]);
  const [invoiceSearch, setInvoiceSearch] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const getInvoices = async () => {
    try {
      setIsLoading(true);
      const { data } = await invoiceService.invoices("");
      console.log(data);
      setInvoices(data);
    } catch (error) {}
  };

  useEffect(() => {
    getInvoices();
  }, []);
  return (
    <View>
      <InputWithIcon
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
        }}
        inputStyle={{ color: "black", fontWeight: "bold" }}
        icon={faSearch}
        placeholder="Buscar"
      />
      <ActivityIndicator size="large" />
    </View>
  );
}

export default Table;
