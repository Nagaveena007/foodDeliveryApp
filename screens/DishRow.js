import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket,selectBasketItems,removeFromBasket,selectBasketItemsWithId } from "../slices/basketSlice";
const DishRow = ({ id,name, description, price, image }) => {
  const {
    container,
    rowContainer,
    textContainer,
    nameStyle,
    priceStyle,
    imageStyle,
    descriptionStyle,
    cartContainer,
    cart,
    plus,
    minus,
  } = styles;

  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id,name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };
  
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={container}>
        <View style={rowContainer}>
          <View style={textContainer}>
            <Text style={nameStyle}>{name}</Text>
            <Text style={descriptionStyle}>{description}</Text>
            <Text style={priceStyle}>{price} €</Text>
          </View>
          <View>
            <Image style={imageStyle} source={{ uri: image }} />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={cartContainer}>
          <View style={cart}>
            <TouchableOpacity
            disabled= {!items.length}
              onPress={removeItemFromBasket}>
              <AntDesign
                style={minus}
                name="minuscircle"
                size={24}
                color={items.length >0 ? '#336b46' : 'gray'}
              />
            </TouchableOpacity>
            <Text> {items.length}
            </Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <AntDesign
                style={plus}
                name="pluscircle"
                size={24}
                color="#336b46"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
export default DishRow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3EF",
    borderTopWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    borderColor: "#B8E4C0",
  },
  rowContainer: {
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#336B46",
    marginBottom: 4,
  },
  descriptionStyle: {
    color: "#808080",
  },
  priceStyle: {
    color: "#FF8C00",
    marginTop: 8,
  },
  imageStyle: {
    height: 80,
    width: 80,
    backgroundColor: "#D1D5DB",
    padding: 16,
  },
  cartContainer: {
    paddingLeft: 15,
    paddingBottom: 15,
  },
  cart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  plus: {
    paddingRight: 5,
  },
  minus: {
    paddingLeft: 5,
  },
});
