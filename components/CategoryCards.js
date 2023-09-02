import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function CategoryCards({
  name,
  price,
  imgUrl,
  short_description,
}) {
  const { container, image, text } = styles;

  return (
    <TouchableOpacity style={container}>
      <Image source={{ uri: imgUrl.toString() }} style={image} />
      <Text style={text}>{name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingRight: 8,
  },
  image: {
    height: 100,
    width: 120,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  text: {
    position: "absolute",
    bottom: 1,
    left: 1,
    color: "white",
    fontWeight: "bold",
  },
});
