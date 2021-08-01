import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { page } from "./SignUp.style";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  return (
    <View style={page.container}>
      <Text style={page.logo}>Registro</Text>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Nombre"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Apellido"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Numero de telefono"
          value={number}
          keyboardType="phone-pad"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={page.itemSeparatorRule}></View>
      <View style={page.inputView}>
        <TextInput
          style={page.inputText}
          placeholder="Correo"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
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

      <TouchableOpacity style={page.loginBtn}>
        <Text style={page.loginText}>Registrarme</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={page.signUpText}>
          Al registrarme acepto Terminos y condiciones, ademas del Aviso de
          privacidad.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
