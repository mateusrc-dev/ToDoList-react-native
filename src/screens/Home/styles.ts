import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerAll: {
    marginTop: 40,
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
    alignItems: 'center',
  },
  containerThree: {
    width: 327,
    height: 208,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  containerFour: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginBottom: 32,
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },
  buttonImage: {
    borderWidth: 2,
    borderColor: '#FFF',
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
  },
  buttonText: {
    marginTop: -4.2,
    color: '#FFF'
  },
  input: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    height: 51,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0D0D0D",
    borderRadius: 6,
    color: "white",
  },
});
