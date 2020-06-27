import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export class Perfil extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={{
            marginLeft: 10,
            flexDirection: "row",
            margin: 10,
            justifyContent: "flex-end",
          }}
          onPress={() => {
            this.setState({ show: true });
          }}
        >
          <Text style={{ color: "#381460" }}>Cerrar Sesión</Text>
          <Icon
            name="share-square-o"
            size={18}
            color="#381460"
            style={{ marginLeft: 5, marginTop: 3 }}
          />
        </TouchableOpacity>
        <View style={{ borderBottomWidth: 1, borderColor: "#dddddd" }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Image
              source={require("../Images/perfil.jpg")}
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                borderRadius: 200,
                marginTop: 10,
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
              style={{
                width: 80,
                height: 100,
                borderColor: "#ddd",
                borderWidth: 1,
                margin: 10,
                borderRadius: 10,
                shadowColor: "#ddd",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.9,
                shadowRadius: 2,
                margin: 10,
                elevation: 1,
                backgroundColor: "#3282b8",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="heart" size={50} color="#fff" />
            </View>
            <Text style={{ color: "#0f4c75", fontSize: 12 }}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
              style={{
                width: 80,
                height: 100,
                borderColor: "#ddd",
                borderWidth: 1,
                margin: 10,
                borderRadius: 10,
                shadowColor: "#ddd",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.9,
                shadowRadius: 2,
                margin: 10,
                elevation: 1,
                backgroundColor: "#3282b8",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="download" size={50} color="#fff" />
            </View>
            <Text style={{ color: "#0f4c75", fontSize: 12 }}>Descargas</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginTop: 100 }}>
          <Modal transparent={true} visible={this.state.show}>
            <View
              style={{
                backgroundColor: "#000000aa",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  margin: 50,
                  padding: 40,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    marginBottom: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ¿Seguro que quieres cerrar Sesión?
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={{
                      height: 35,
                      width: 60,
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      this.setState({ show: false });
                      navigation.navigate('Login');
                    }}
                  >
                    <Text style={{ color: "#ADADAD" }}>Sí</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 35,
                      width: 60,
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      this.setState({ show: false });
                    }}
                  >
                    <Text style={{ color: "#ADADAD" }}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

export default Perfil;
