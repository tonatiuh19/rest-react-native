import { StyleSheet } from "react-native";

export const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  titleSection: {
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
  },
  itemSeparatorRule: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    padding: 15,
  },
  sectionContainer: {
    paddingTop: 10,
  },
  itemSection: {
    padding: 15,
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
  },
  tagTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20,
    paddingBottom: 10,
  },
  itemSectionTitle: {
    fontSize: 17,
  },
});
