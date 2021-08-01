import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { page } from "./Login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={page.container}>
      <Text style={page.logo}>HeyAPP</Text>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Correo"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={page.inputView}>
        <TextInput
          secureTextEntry
          style={page.inputText}
          placeholder="Contraseña"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={page.forgot}>Olvide mi contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity style={page.loginBtn}>
        <Text style={page.loginText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={page.signUpText}>Registro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;