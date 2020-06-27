import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import firebaseservice from '../components/Firebase.js';

/*function aceptar(navigation) {
  navigation.navigate("Login");
}*/

const Register = ({ navigation }) => {

  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const crearnewuser = async () => {
    try {
      await firebaseservice.createuser(name, user, pass)
      alert("Éxito! Cuenta creada correctamente")
      navigation.navigate("Login");
    } catch (e) {
      alert("Intenta de Nuevo!")
    }

  }
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
                paddingLeft: 10,
                width: 250,
                marginLeft: 17,
              }}
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.nativeEvent.text)}
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
            <Text style={{ padding: 10, fontSize: 15 }}>Email</Text>
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
              placeholder="Email"
              value={user}
              onChange={(e) => setUser(e.nativeEvent.text)}
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
            <Text style={{ padding: 5, fontSize: 15 }}>Contraseña</Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                paddingLeft: 10,
                width: 250,
                marginLeft: 5,
              }}
              placeholder="Cotraseña"
              autoCapitalize="none"
              secureTextEntry
              value={pass}
              onChange={(e) => setPass(e.nativeEvent.text)}
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
        onPress={(crearnewuser)}
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
