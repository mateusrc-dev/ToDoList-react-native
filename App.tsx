import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.containerAll}>
      <View style={styles.container}>
        <View style={styles.containerTwo}>
          <Text style={styles.textOne}>Criadas</Text>
          <Text style={styles.numberContainer}>0</Text>
        </View>
        <View style={styles.containerTwo}>
          <Text style={styles.textTwo}>Concluídas</Text>
          <Text style={styles.numberContainer}>0</Text>
        </View>
      </View>
      <View style={styles.containerThree}>
        <View>
          <Text style={styles.textThree}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.textFour}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
        <ImageBackground
          source={require("./assets/image.png")}
          style={{ width: 56, height: 56 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: {
    paddingLeft: 24,
    paddingRight: 24,
    textAlign: "justify",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  containerTwo: {
    flexDirection: "row",
    gap: 8,
  },
  containerThree: {
    width: 327,
    height: 208,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  textOne: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 17,
  },
  textTwo: {
    color: "#8284FA",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 17,
  },
  textThree: {
    color: "#808080",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
  },
  textFour: {
    color: "#808080",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
  },
  numberContainer: {
    backgroundColor: "#333333",
    borderRadius: 999,
    color: "white",
    fontWeight: "bold",
    width: 25,
    height: 19,
    textAlign: "center",
  },
});
