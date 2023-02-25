import { StyleSheet, Text, View } from "react-native";

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
      <View>
        <Text>
          Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
          itens a fazer
        </Text>
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
  },
  containerTwo: {
    flexDirection: "row",
    gap: 8,
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
