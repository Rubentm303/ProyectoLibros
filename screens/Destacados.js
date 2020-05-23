import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

/*function DtCupon(navigation) {
  navigation.navigate("DetallesCupon");
}
function Rcanjeado(navigation) {
  navigation.navigate("MasCanjeado");
}
function Rrecomendado(navigation) {
  navigation.navigate("Recomendados");
}*/

function Destacados({ navigation }) {
  return (
    <ScrollView scrollEventThrottle={16} style={{}}>
      <View style={{ flex: 1, paddingTop: 15 }}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => Rcanjeado(navigation)}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              paddingHorizontal: 20,
              paddingBottom: 5,
              color: "#0f4c75",
            }}
          >
            Más descargado
          </Text>

          <Icon
            style={{
              display: "flex",
              paddingTop: 5,
              color: "#0f4c75",
            }}
            name="chevron-right"
          />
        </TouchableOpacity>

        <View style={{ height: 250, marginTop: 15 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableNativeFeedback
              style={{
                height: 250,
                width: 250,
                marginLeft: 20,
                marginRight: 5,
                borderWidth: 0.5,
                borderColor: "#dddddd",
                borderRadius: 10,
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../Images/Coraline.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
              </View>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text> Coraline </Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              name="card1"
              style={{
                height: 250,
                width: 250,
                marginLeft: 20,
                marginRight: 5,
                borderWidth: 0.5,
                borderColor: "#dddddd",
                borderRadius: 10,
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../Images/DiarioAnaFrank.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
              </View>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text>El Diario de AnaFrank</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              name="card2"
              style={{
                height: 250,
                width: 250,
                marginLeft: 20,
                marginRight: 5,
                borderWidth: 0.5,
                borderColor: "#dddddd",
                borderRadius: 10,
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../Images/ElHobbit.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
              </View>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text> El Hobbit </Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              name="card3"
              style={{
                height: 250,
                width: 250,
                marginLeft: 20,
                marginRight: 5,
                borderWidth: 0.5,
                borderColor: "#dddddd",
                borderRadius: 10,
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../Images/Elprincipito.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
              </View>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text> El Principito </Text>
              </View>
            </TouchableNativeFeedback>
          </ScrollView>
        </View>

        <View style={{ paddingTop: 15 }}>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => Rrecomendado(navigation)}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
                paddingHorizontal: 20,
                paddingTop: 15,
                color: "#0f4c75",
              }}
            >
              Recomendados para tí
            </Text>
            <Icon
              style={{
                display: "flex",
                paddingTop: 20,
                color: "#0f4c75",
              }}
              name="chevron-right"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <TouchableNativeFeedback
            style={{
              height: 150,
              width: 150,
              marginLeft: 9,
              marginRight: 5,
              borderWidth: 0.5,
              borderColor: "#dddddd",
              borderRadius: 10,
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <View style={{ flex: 2 }}>
              <Image
                source={require("../Images/HPpiedraFil.jpg")}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover",
                }}
              />
            </View>

            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
              <Text> Harry Potter y la Piedra Filosofal </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            style={{
              height: 150,
              width: 150,
              marginLeft: 9,
              marginRight: 5,
              borderWidth: 0.5,
              borderColor: "#dddddd",
              borderRadius: 10,
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <View style={{ flex: 2 }}>
              <Image
                source={require("../Images/LaMetamorfosis.jpg")}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover",
                }}
              />
            </View>

            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
              <Text> La Metamorfosis </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </ScrollView>
  );
}

export default Destacados;
