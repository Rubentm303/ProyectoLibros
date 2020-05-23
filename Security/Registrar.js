import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

function aceptar(navigation) {
  navigation.navigate("Login");
}

function Register({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 30, color: "#0f4c75" }}>Nuevo Usuario</Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ padding: 10, fontSize: 15 }}>Nombre</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                width: 250,
                paddingLeft: 10,
              }}
              placeholder="Type here to translate!"
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
            <Text style={{ padding: 10, fontSize: 15 }}>Apellido</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                width: 250,
                paddingLeft: 10,
              }}
              placeholder="Type here to translate!"
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
            <Text style={{ padding: 10, fontSize: 15 }}>Nacimiento</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                width: 250,
                paddingLeft: 10,
              }}
              placeholder="Type here to translate!"
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
            <Text style={{ padding: 10, fontSize: 15 }}>Correo</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                paddingLeft: 10,
                width: 250,
                marginLeft: 17,
              }}
              placeholder="Type here to translate!"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 45,
          width: 150,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#0f4c75",
          margin: 10,
        }}
        onPress={() => aceptar(navigation)}
      >
        <Text style={{ color: "#0f4c75" }}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  btnAceptar: {},
});
