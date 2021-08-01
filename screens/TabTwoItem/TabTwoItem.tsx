import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { page } from "./TabTwoItem.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const TabTwoItem = () => {
  return (
    <View data-testid="TabTwoItem" style={page.container}>
      <View>
        <View style={page.profileSection}>
          <Text style={page.names}>Felix Alejandro Tonatiuh</Text>
          <Text style={page.names}>Gomez Briones</Text>

          <TouchableOpacity style={page.buttonEdit}>
            <Text style={page.buttonSectionTitle}>
              <FontAwesome5 name="user-edit" size={18} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={page.itemSeparatorRule}></View>
      <View style={page.sectionContainer}>
        <View>
          <Text style={page.tagTitle}>Reservas</Text>
          <TouchableOpacity style={page.buttonSection}>
            <Text style={page.buttonSectionTitle}>
              <FontAwesome5 name="restroom" size={18} color="black" /> Mis
              reservas
            </Text>
            <View style={page.reservationsContainerNumber}>
              <Text style={page.reservationsNumber}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={page.itemSeparatorRule}></View>
      <View style={page.sectionContainer}>
        <View>
          <Text style={page.tagTitle}>Pagos</Text>
          <TouchableOpacity style={page.buttonSection}>
            <Text style={page.buttonSectionTitle}>
              <FontAwesome name="credit-card-alt" size={18} color="black" />{" "}
              Metodo de pago
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={page.footer}>
        <View style={page.itemSeparatorRule}></View>
        <View style={page.sectionContainer}>
          <View>
            <TouchableOpacity style={page.buttonSection}>
              <Text style={page.buttonSectionTitle}>
                <MaterialCommunityIcons
                  name="map-marker-plus"
                  size={24}
                  color="black"
                />{" "}
                Publicar un baño
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TabTwoItem;
