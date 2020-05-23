import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

function aceptar(navigation) {
  navigation.navigate("Index");
}

function GoRegister(navigation) {
  navigation.navigate("RegistrarNuevo");
}

function Login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 40, color: "#0f4c75" }}>Login</Text>
      <View>
        <View>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              name="user"
              color="#3282b8"
              size={25}
              style={{ margin: 20 }}
            />
            <TextInput
              style={{
                height: 50,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 20,
                width: 250,
                paddingLeft: 10,
              }}
              placeholder="Ingresa tu Usuario"
            />
          </View>
        </View>

        <View>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              name="lock"
              color="#3282b8"
              size={25}
              style={{ margin: 20 }}
            />
            <TextInput
              style={{
                height: 50,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 20,
                width: 250,
                paddingLeft: 10,
              }}
              placeholder="Contraseña"
            />
          </View>
        </View>
      </View>
      <TouchableWithoutFeedback
        style={styles.btnAceptar}
        onPress={() => aceptar(navigation)}
      >
        <Text style={{ color: "#3282b8" }}>Aceptar</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnAceptar: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 150,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#3282b8",
    margin: 10,
  },
});
