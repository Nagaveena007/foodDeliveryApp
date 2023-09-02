import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import DishRow from "./DishRow";
import BasketIcon from "../components/BasketIcon";
const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: { id, image, name, rating, genre, address, dishes, long, lat },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    imageStyle,
    backButton,
    container,
    Viewcontainer,
    innerContainer,
    title,
    infoContainer,
    ratingContainer,
    ratingStar,
    ratingText,
    ratingValue,
    genreText,
    locationContainer,
    locationIcon,
    addressText,
    descriptionText,
    buttonIcon,
    buttonContainer,
    buttonText,
    buttonChevronIcon,
    dishesContainer,
    dishesTitle,
    arrowLeft,
  } = styles;
  return (
    <>
      <BasketIcon/>
    <ScrollView>
      <View style={container}>
        <Image
          source={{
            uri: image,
          }}
          style={imageStyle}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={backButton}>
          <AntDesign
            name="arrowleft"
            size={20}
            color="#336b46"
            style={arrowLeft}
          />
        </TouchableOpacity>
      </View>

      <View style={Viewcontainer}>
        <View style={innerContainer}>
          <Text style={title}>{name}</Text>
          <View style={infoContainer}>
            <View style={ratingContainer}>
              <FontAwesome name="star" size={24} style={ratingStar} />
              <Text style={ratingText}>
                <Text style={ratingValue}>{rating}</Text> - {genre}
              </Text>
            </View>
            <View style={locationContainer}>
              <FontAwesome5
                name="map-marker-alt"
                size={24}
                style={locationIcon}
              />
              <Text style={addressText}>Nearby - {address}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={dishesContainer}>
        <Text style={dishesTitle}></Text>
        {dishes.map((dish) => (
          <DishRow
            key={dish.name}
            id={dish.id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
      </ScrollView>
      </>
  );
};

export default RestaurantScreen;
const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 224,
    backgroundColor: "#D1D5DB",
    padding: 16,
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 15,
    padding: 10,
    backgroundColor: "#D1D5DB",
    borderRadius: 9999,
  },
  container: {
    position: "relative",
    paddingTop: 30,
  },
  arrowLeft: {
    // marginTop:50,
  },
  Viewcontainer: {
    backgroundColor: "#f5f3ef",
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#336b46",
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingStar: {
    color: "green",
    opacity: 0.5,
    fontSize: 22,
  },
  ratingText: {
    fontSize: 12,
    color: "gray",
  },
  ratingValue: {
    color: "green",
  },
  genreText: {
    fontSize: 12,
    color: "gray",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  locationIcon: {
    color: "gray",
    opacity: 0.4,
    fontSize: 22,
  },
  addressText: {
    fontSize: 12,
    color: "gray",
  },
  descriptionText: {
    color: "gray",
    marginTop: 8,
    paddingBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#B8E4C0",
  },
  buttonIcon: {
    color: "#B8E4C0",
    opacity: 0.6,
    fontSize: 20,
  },
  buttonText: {
    flex: 1,
    paddingLeft: 8,
    color: "#FBA536",
    fontWeight: "bold",
  },
  buttonChevronIcon: {
    color: "#336b46",
  },
  dishesTitle: {
    paddingHorizontal: 16,
    paddingTop: 6,
    marginBottom: 3,
    color: "#336b46",
    fontWeight: "bold",
    fontSize: 24,
  },
  dishesContainer: {
    paddingBottom: 28,
  },
});
