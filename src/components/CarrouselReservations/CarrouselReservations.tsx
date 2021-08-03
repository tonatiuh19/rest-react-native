import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { page } from "./CarrouselReservations.style";
import Carousel, { Pagination } from "react-native-x2-carousel";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import "moment/min/locales";
import LoadingCarrousel from "../LoadingCarrousel/LoadingCarrousel";

const deviceLocale = "es";

const DATA = [
  {
    id: 1,
    text: (
      <Image
        style={page.tinyPicture}
        source={{
          uri: "https://cdn2.mediotiempo.com/uploads/media/2021/07/15/top-jaime-lozano-jo_0_1_899_533.jpg",
        }}
      />
    ),
  },
  {
    id: 2,
    text: (
      <Image
        style={page.tinyPicture}
        source={{
          uri: "https://www.nicepng.com/png/detail/142-1429857_chivas-de-guadalajara-logo.png",
        }}
      />
    ),
  },
  {
    id: 3,
    text: (
      <Image
        style={page.tinyPicture}
        source={{
          uri: "https://cdn2.mediotiempo.com/uploads/media/2021/07/15/top-adelantos-tecnologicos_0_7_823_474.jpg",
        }}
      />
    ),
  },
];

const CarrouselReservations = (props: any) => {
  moment.locale(deviceLocale);

  const [currentDate, setCurrentDate] = useState("");
  const [loading, setLoading] = useState(false);

  const renderItem = (data) => (
    <View key={data.id} style={page.item}>
      <Text>{data.text}</Text>
    </View>
  );

  useEffect(() => {
    setCurrentDate(
      moment(props.date).startOf("day").fromNow().charAt(0).toUpperCase() +
        moment(props.date).startOf("day").fromNow().slice(1)
    );
  }, []);

  const renderTypeIcon = (type: number) => {
    if (type == 1) {
      return <FontAwesome5 name="restroom" size={18} />;
    } else if (type == 3) {
      return (
        <Text>
          <FontAwesome5 name="restroom" size={18} />{" "}
          <FontAwesome5 name="shower" size={18} />
        </Text>
      );
    }
  };

  return (
    <View data-testid="CarrouselReservations" style={page.container}>
      {loading ? (
        <LoadingCarrousel></LoadingCarrousel>
      ) : (
        <View>
          <Text style={page.tagTitle}>
            {renderTypeIcon(1)} {props.title}
          </Text>
          <View style={page.containerCarousel}>
            <Carousel
              pagination={Pagination}
              renderItem={renderItem}
              autoplay={true}
              autoplayInterval={4800}
              data={DATA}
            />
          </View>
          <View style={page.containerText}>
            <Text style={page.containerTitle}>
              <MaterialIcons name="place" size={13} color="black" />
              &nbsp;{props.location}
            </Text>
            <Text style={page.containerDate}>
              {moment(props.date)
                .startOf("day")
                .fromNow()
                .charAt(0)
                .toUpperCase() +
                moment(props.date).startOf("day").fromNow().slice(1) +
                ", " +
                moment(props.date).format("LT")}
            </Text>
          </View>
          <View style={page.itemSeparatorRule}></View>
          <View style={page.containerText}>
            <Text style={page.containerTitle}></Text>
            <View style={page.containerButtons}>
              {true ? (
                <View style={page.containerButtonsRow}>
                  <TouchableOpacity style={page.buttonSection}>
                    <Text style={page.buttonSectionTitle}>
                      <FontAwesome name="check-circle" size={10} /> Check In
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={page.buttonSectionCancel}>
                    <Text style={page.buttonSectionTitle}>
                      <Entypo name="circle-with-cross" size={10} /> Cancelar
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={page.containerButtonsRow}>
                  <TouchableOpacity style={page.buttonSectionComplete}>
                    <Text style={page.buttonSectionTitleComplete}>
                      <FontAwesome name="check-circle" size={10} /> Completo
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default CarrouselReservations;
