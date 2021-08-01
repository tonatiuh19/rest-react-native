import { StyleSheet, Dimensions } from "react-native";

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export const page = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  containerLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  goingBack: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    margin: 5,
  },
  floatHeader: {
    alignItems: "center",
    justifyContent: "center",
    width: imageWidth,
    position: "absolute",
    top: 30,
    height: 70,
    zIndex: 1,
  },
  buttonsSecondary: {
    flexDirection: "row",
  },
  carrousel: {},
  tinyPicture: {
    width: imageWidth * 1.1,
    height: imageHeight * 1.2,
  },
  itemCarrousel: {},
  containerItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 50,
    fontWeight: "bold",
    lineHeight: 50,
  },
  itemPlace: {
    fontSize: 18,
    color: "#3d5c21",
  },
  itemPrice: {
    fontSize: 25,
    fontWeight: "bold",
  },
  itemSeparator: {
    paddingTop: 10,
    paddingBottom: 100,
  },
  itemSeparatorRule: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  containerText: {
    paddingTop: 15,
    padding: 5,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "flex",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000",
  },
  splitContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "flex",
  },
  splitContainerFirst: {
    flexGrow: 0,
    flexShrink: 1,
    width: "75%",
  },
  splitContainerSecond: {
    flexGrow: 0,
    flexShrink: 1,
  },
  splitContainerFFirst: {
    flexGrow: 0,
    flexShrink: 1,
    width: "50%",
  },
  splitContainerFSecond: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "row",
  },
  reserveButton: {
    width: imageWidth / 2.15,
    height: 70,
    backgroundColor: "#7bb543",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  reserveButtonTitle: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  reserveButtonContainer: {
    padding: 10,
  },
  priceContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  priceTitle: {
    fontSize: 30,
    top: "50%",
    fontWeight: "bold",
    color: "white",
  },
});
