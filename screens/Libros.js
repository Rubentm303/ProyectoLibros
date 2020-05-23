import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Icon from "@expo/vector-icons/FontAwesome";

function DtCupon(navigation) {
  navigation.navigate("DetallesCupon");
}

function Cupones({ navigation }) {
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
              shadowColor: "#ddd",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.9,
              shadowRadius: 2,
              margin: 10,
              elevation: 2,
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
                <TouchableOpacity>
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

export default Cupones;
