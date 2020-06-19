import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import * as firebase from 'firebase';

/*function aceptar(navigation) {
  navigation.navigate("Login");
}*/

class Register extends React {
  constructor(props) {
    super(props);
    this.state = {
      isEnable: false,
      showPassword: true,
      name: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  }

  handleSignUp = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };
  render() {
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
                placeholder="Nombre"
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
                onChangeText={(email) => this.setState({ email: email })}
                value={this.state.email}
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
              <Text style={{ padding: 10, fontSize: 15 }}>Contraseña</Text>
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
                placeholder="Cotraseña"
                secureTextEntry={this.state.showPassword}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
                value={this.state.password}
                autoCapitalize="none"
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
          onPress={this.handleSignUp}
        >
          <Text style={{ color: "#0f4c75" }}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  btnAceptar: {},
});
