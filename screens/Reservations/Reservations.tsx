import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CarrouselReservations from "../../src/components/CarrouselReservations/CarrouselReservations";
import { page } from "./Reservations.style";

const Reservations = () => {
  return (
    <View data-testid="Reservations" style={page.container}>
      <View style={page.titleSection}>
        <Text style={page.title}>Mis reservas</Text>
      </View>
      <View style={page.itemSeparatorRule}></View>
      <View style={page.sectionContainer}>
        <CarrouselReservations
          title="Baño bien"
          location="Lagos de Moreno, Jalisco"
          date="2021/08/19 19:18:23"
          complete="false"
        ></CarrouselReservations>
      </View>
    </View>
  );
};

export default Reservations;
