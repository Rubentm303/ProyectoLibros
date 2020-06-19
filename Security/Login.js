import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

/*function aceptar(navigation) {
  navigation.navigate("Index");
}

function GoRegister(navigation) {
  navigation.navigate("RegistrarNuevo");
}*/

class Login extends React {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? "Index" : "Login");
    });
  }
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
        <Text style={{ fontSize: 40, color: "#0f4c75" }}>Login</Text>
        <View>
          <View>
            <View styles={style.errorMessage}>
              {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>
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
                autoCapitalize="none"
                onChangeText={email => this.useState({ email })}
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
                autoCapitalize="none"
                secureTextEntry
                onChangeText={password => this.useState({ password })}
                value={this.state.password}
              />
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback
          style={styles.btnAceptar}
          onPress={() => this.handleLogin}
        >
          <Text style={{ color: "#3282b8" }}>Aceptar</Text>
        </TouchableWithoutFeedback>

      </View>
    );
  }
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
  ErrorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "red",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"

  }

});
