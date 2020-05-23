import React from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import {
  TouchableWithoutFeedback,
  TextInput,
} from "react-native-gesture-handler";

function Login(navigation) {
  navigation.navigate("Login");
}

function GoRegister(navigation) {
  navigation.navigate("RegistrarNuevo");
}

function Inicio({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {Platform.OS === "android" && (
        <StatusBar
          hidden={false}
          backgroundColor="#fff"
          barStyle="dark-content"
        />
      )}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 50, color: "#0f4c75", marginTop: 100 }}>
          Bienvenido
        </Text>
        <Text style={{ fontSize: 15, color: "#CCCCCC" }}>
          Descubre toda la variedad de libros y descargalos
        </Text>
      </View>
      <TouchableWithoutFeedback
        style={styles.btnLogin}
        onPress={() => Login(navigation)}
      >
        <Text style={{ color: "#3282b8", fontSize: 18 }}>Login</Text>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={styles.btnRegistrar}
        onPress={() => GoRegister(navigation)}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Registrar</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnLogin: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3282b8",
    margin: 10,
    marginTop: 50,
  },
  btnRegistrar: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 150,
    borderRadius: 20,
    backgroundColor: "#3282b8",
    margin: 10,
  },
  fondo: {
    position: "absolute",
  },
  logo: {
    height: 70,
    width: 315,
    marginBottom: 100,
  },
});
