import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { decode_utf8, formatter } from "../../src/resources/Decode/Decode";
import { page } from "./TabOneItem.style";
import Carousel, { Pagination } from "react-native-x2-carousel";
import RenderHtml from "react-native-render-html";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Loading from "../../src/components/Loading/Loading";

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

const TabOneItem = (props: any) => {
  const { item } = props.route.params.item;
  //props.navigation.setOptions({ title: "" });
  const source = {
    html: decode_utf8(item.description),
  };

  const [loading, setLoading] = useState(true);

  const renderItem = (data) => (
    <View key={data.id} style={page.itemCarrousel}>
      <Text>{data.text}</Text>
    </View>
  );

  const goingBack = () => {
    props.navigation.goBack(null);
  };

  const sharePlace = () => {
    console.log("Hola");
  };

  const lovePlace = () => {
    console.log("Hola");
  };

  useEffect(() => {
    //console.log(item.title);
    setLoading(false);
  }, []);

  return (
    <View data-testid="TabOneItem" style={page.container}>
      {loading ? (
        <View style={page.containerLoading}>
          <Loading></Loading>
        </View>
      ) : (
        <View style={page.contentContainer}>
          <View style={page.floatHeader}>
            <View style={page.splitContainer}>
              <View style={page.splitContainerFirst}>
                <TouchableOpacity
                  style={page.goingBack}
                  onPress={() => goingBack()}
                >
                  <Text>
                    <FontAwesome name="close" size={20} color="black" />
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={page.splitContainerSecond}>
                <View style={page.buttonsSecondary}>
                  <TouchableOpacity
                    style={page.goingBack}
                    onPress={() => sharePlace()}
                  >
                    <Text>
                      <MaterialIcons name="ios-share" size={20} color="black" />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={page.goingBack}
                    onPress={() => lovePlace()}
                  >
                    <Text>
                      <FontAwesome name="heart" size={20} color="black" />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={page.carrousel}>
            <Carousel
              pagination={Pagination}
              renderItem={renderItem}
              autoplay={true}
              autoplayInterval={4800}
              data={DATA}
            />
          </View>
          <ScrollView style={page.containerItem}>
            <View>
              <Text style={page.itemTitle}>{decode_utf8(item.title)}</Text>
              <Text style={page.itemPlace}>
                <MaterialIcons name="place" size={14} />
                {decode_utf8(item.city + ", " + item.state)}
              </Text>
            </View>
            <View style={page.itemSeparatorRule} />
            <View style={page.itemSeparator}>
              <RenderHtml source={source} />
            </View>
          </ScrollView>
          <View style={page.footer}>
            <View style={page.splitContainer}>
              <View style={page.splitContainerFFirst}>
                <View style={page.priceContainer}>
                  <Text style={page.priceTitle}>
                    {formatter.format(Number(item.price))}
                  </Text>
                </View>
              </View>
              <View style={page.splitContainerFSecond}>
                <View style={page.reserveButtonContainer}>
                  <TouchableOpacity
                    style={page.reserveButton}
                    onPress={() => lovePlace()}
                  >
                    <Text style={page.reserveButtonTitle}>
                      Solicitar acceso{" "}
                      <Ionicons name="md-arrow-forward-circle" size={24} />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default TabOneItem;
