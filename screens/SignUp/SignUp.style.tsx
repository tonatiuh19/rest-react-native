import { StyleSheet } from "react-native";

export const page = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d4d4",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#030000",
    fontSize: 20,
  },
  forgot: {
    color: "#030000",

    fontSize: 15,
  },
  itemSeparatorRule: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    padding: 15,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#7bb543",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  signUpText: {
    paddingLeft: 20,
    paddingRight: 20,
    color: "#030000",
    fontSize: 15,
  },
});
