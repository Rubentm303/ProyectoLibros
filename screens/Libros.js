import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  ToastAndroid,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Linking } from 'react-native'

class Libros extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
      }
      return false;
    });
  }

  handleBackButton() {
    ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
  }

  render() {
    return (
      <ScrollView
        scrollEventThrottle={16}
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView
          style={{
            height: 100,
            backgroundColor: "#F5F5F5",
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 5,
              marginTop: 5,
              color: "#1b262c",
              fontSize: 15,
            }}
          >
            Categorías
        </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 110,
                  height: 35,

                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  overflow: "hidden",

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  margin: 10,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    width: 115,
                    height: 35,
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 5,
                    left: 0,
                    right: 0,
                    backgroundColor: "#0f4c75",
                  }}
                >
                  <Text style={{ color: "#fff" }}>Misterio</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 110,
                  height: 35,

                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  overflow: "hidden",

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  margin: 10,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    width: 115,
                    height: 35,
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 5,
                    left: 0,
                    right: 0,
                    backgroundColor: "#0f4c75",
                  }}
                >
                  <Text style={{ color: "#fff" }}>Historia</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 110,
                  height: 35,

                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  overflow: "hidden",

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  margin: 10,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    width: 115,
                    height: 35,
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 5,
                    left: 0,
                    right: 0,
                    backgroundColor: "#0f4c75",
                  }}
                >
                  <Text style={{ color: "#fff" }}>Novelas</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 110,
                  height: 35,

                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  overflow: "hidden",

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  margin: 10,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    width: 115,
                    height: 35,
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 5,
                    left: 0,
                    right: 0,
                    backgroundColor: "#0f4c75",
                  }}
                >
                  <Text style={{ color: "#fff" }}>Cuentos</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
        <ScrollView>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "#dddddd",
                borderRadius: 10,
                height: 350,
                width: 300,
                marginTop: 10,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../Images/Mujercitas.jpg")}
                  style={{ height: 130, width: 100, marginTop: 10 }}
                />
                <Text style={{ margin: 10, color: "#1b262c" }}>Mujercitas</Text>
              </View>

              <Text style={{ margin: 10, color: "#8C8C8C" }}>
                cuatro niñas que tras pasar la adolescencia, con la Guerra Civil
                en los Estados Unidos como fondo, entre 1861 y 1865, se convierten
                en mujeres. Está basada en las vivencias de la autora cuando era
                una niña y vivía en la ciudad de Concord (Massachusetts).
            </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <TouchableOpacity>
                    <Icon name="heart-o" size={18} color="red" />
                  </TouchableOpacity>
                  <Text style={{ margin: 5, color: "#6B6B6B" }}>2.7 K</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <TouchableOpacity onPress={() => Linking.openURL("https://drive.google.com/file/d/1kkmTN4GmdBEzihCwDRW1ds0CwHWhlREM/view?usp=sharing")}>
                    <Icon name="download" size={18} color="#3282b8" />
                  </TouchableOpacity>
                  <Text style={{ margin: 5, color: "#6B6B6B" }}>2.7 K</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "#dddddd",
                borderRadius: 10,
                height: 350,
                width: 300,
                marginTop: 10,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../Images/DiarioAnaFrank.jpg")}
                  style={{ height: 130, width: 100, marginTop: 10 }}
                />
                <Text style={{ margin: 10, color: "#1b262c" }}>El Diaro de Ana Frank</Text>
              </View>

              <Text style={{ margin: 10, color: "#8C8C8C" }}>
                El Diario de Ana Frank es el testimonio de una víctima del delirio a que llegó el mundo por acción de los nazis.
                Fue encontrado y publicado por Miep Gies, una amiga de la familia, en 1947.
                La II Guerra Mundial estalló tras la ruptura del “Pacto germano-soviético” firmado en agosto de 1939.
            </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <TouchableOpacity>
                    <Icon name="heart-o" size={18} color="red" />
                  </TouchableOpacity>
                  <Text style={{ margin: 5, color: "#6B6B6B" }}>2.7 K</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <TouchableOpacity onPress={() => Linking.openURL("https://drive.google.com/file/d/1V4qLD-k3S481nn3g05qtEJKAHabn56EY/view?usp=sharing")}>
                    <Icon name="download" size={18} color="#3282b8" />
                  </TouchableOpacity>
                  <Text style={{ margin: 5, color: "#6B6B6B" }}>2.7 K</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "#dddddd",
                borderRadius: 10,
                height: 350,
                width: 300,
                marginTop: 10,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../Images/LaMetamorfosis.jpg")}
                  style={{ height: 130, width: 100, marginTop: 10 }}
                />
                <Text style={{ margin: 10, color: "#1b262c" }}>La Metamorfosis</Text>
              </View>

              <Text style={{ margin: 10, color: "#8C8C8C" }}>
                La metamorfosis es una narración autoría de Franz Kafka, publicada en 1915, que cuenta la historia de la
                transformación de Gregorio Samsa en un monstruoso insecto, y del drama familiar que, a raíz de este
                acontecimiento, se desata.
            </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <TouchableOpacity>
                    <Icon name="heart-o" size={18} color="red" />
                  </TouchableOpacity>
                  <Text style={{ margin: 5, color: "#6B6B6B" }}>2.7 K</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <TouchableOpacity onPress={() => Linking.openURL("https://drive.google.com/file/d/1Az8wYYdQyW33NONsa670NCyo7Pcf9_bL/view?usp=sharing")}>
                    <Icon name="download" size={18} color="#3282b8" />
                  </TouchableOpacity>
                  <Text style={{ margin: 5, color: "#6B6B6B" }}>2.7 K</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}
export default Libros;
