import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const FeaturedRow = ({
  id,
  key,
  addressss,
  dishess,
  genre,
  image,
  lat,
  long,
  name,
  offer,
  rating,
  title,
}) => {
  const { container, featuredText, titleText, arrow } = styles;

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          //"https://deliveroo-database.onrender.com/restaurants"
          "http://localhost:3000/restaurants"
        );
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <View>
      <View style={container}>
        <Text style={featuredText}>Featured</Text>
        {offer?.map((restaurantOffer) => (
          <Text key={restaurantOffer.id} style={featuredText}>
            {restaurantOffer.featured}
          </Text>
        ))}
        <Ionicons name="arrow-forward-outline" color="#00CCBB" size={24} />
      </View>
      <Text style={titleText}>Special offeres</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 15,
        }}
        style={{ paddingTop: 4 }}>
        {restaurants.map((restaurant) => (
          <React.Fragment key={restaurant.id}>
            <RestaurantCard {...restaurant} />
            </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  arrow: {
    display: "flex",
    right: 0,
    background: "transparent",
  },
  featuredText: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    paddingLeft: 15,
  },
  titleText: {
    paddingLeft: 20,
    color: "gray",
  },
});
