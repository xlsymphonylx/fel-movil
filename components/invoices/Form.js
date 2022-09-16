import React from "react";
import SelectSearch from "react-select-search";
import ProductFormTable from "./ProductFormTable";

function Form() {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      padding: 10,
    },
    container: {
      padding: 10,
      backgroundColor: "#fff",
    },
  });

  const [nit, setNit] = useState("");
  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNit}
        value={nit}
        placeholder="NIT"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNit}
        value={nit}
        placeholder="Tipo de Pago"
      />
      <SelectSearch
        options={options}
        value="sv"
        name="language"
        placeholder="Choose your language"
      />
      <ProductForm />
      <ProductFormTable />
    </View>
  );
}

export default Form;
