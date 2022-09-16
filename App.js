import { useState } from "react";
import Dashboard from "./screens/Dashboard";
import Table from "./screens/invoices/Table";
import Form from "./screens/invoices/Form";
import Invoice from "./screens/invoices/Invoice";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./screens/LogIn";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  return (
    <>
      {user ? (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerStyle: {
                backgroundColor: "#343B41",
                borderBottomWidth: 0,
              },
              title: "[Usuario Info]",
            }}
            initialRouteName="Inicio"
          >
            <Stack.Screen name="Inicio">
              {(props) => <Dashboard {...props} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name="Tabla" component={Table} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Invoice" component={Invoice} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <LogIn setUser={setUser} />
      )}
    </>
  );
}
