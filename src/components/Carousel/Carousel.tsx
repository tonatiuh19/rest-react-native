import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { page } from "./Carousel.style";
import Carousel, { Pagination } from "react-native-x2-carousel";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { decode_utf8 } from "../../resources/Decode/Decode";
import LoadingCarrousel from "../LoadingCarrousel/LoadingCarrousel";

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

const CarouselCard = (props: any) => {
  const [loading, setloading] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const renderItem = (data) => (
    <View key={data.id} style={page.item}>
      <Text>{data.text}</Text>
    </View>
  );

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
    <View style={page.containerCarousel}>
      {loading ? (
        <LoadingCarrousel></LoadingCarrousel>
      ) : (
        <View>
          <Carousel
            pagination={Pagination}
            renderItem={renderItem}
            autoplay={true}
            autoplayInterval={4800}
            data={DATA}
          />
          <View style={page.containerText}>
            <Text style={page.containerTitle}>
              {renderTypeIcon(props.spaceType)}
              &nbsp;
              {decode_utf8(props.title)}
            </Text>
            <Text style={page.containerPrice}>
              {formatter.format(Number(props.price))}
            </Text>
          </View>
          <View>
            <Text style={page.containerPlace}>
              <MaterialIcons name="place" size={14} color="black" />
              {decode_utf8(props.place)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CarouselCard;
