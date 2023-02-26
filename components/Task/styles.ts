import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    gap: 8,
    maxWidth: 327,
    height: 64,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#333333",
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 8,
    flexDirection: "row",
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    borderColor: "#4EA8DE",
    backgroundColor: "transparent",
  },
  text: {
    maxWidth: 220,
    color: '#F2F2F2',
  },
  trash: {
    position: 'absolute',
    right: 12,
  },
});
