import { View, Text, TouchableOpacity, Image,StyleSheet } from "react-native";
import React from "react";
import { Octicons } from '@expo/vector-icons';

const RestaurantCard = ({
  id,
  image,
  name,
  rating,
  genre,
  address,
  dishes,
  long,
  lat
}) => {
  const { 
    touchableOpacity,
    imageStyle,
    textDeco,
    textname,
    textView,
    textGenre,
    textRating,
    addressView,
    addressText,
    
  } = styles
  return (
    <TouchableOpacity 
      style={touchableOpacity}>
      <Image 
        source={{
          uri: image,
        }}
        style={imageStyle}
      />
      <View style={textDeco}>
        <Text style={textname}>{name} </Text>
        <View style={textView}>
          <Octicons name="star" size={22} color="green" opacity={0.5} />
          <Text style={textGenre}>
            <Text style={textRating}>{rating} </Text> . {genre}
          </Text> 
        </View>
        <View style={addressView}>
          <Octicons name="location" opacity={0.4} size={22} color="gray" />
          <Text style={addressText}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
const styles = StyleSheet.create({
  touchableOpacity:{
    backgroundColor: '#fff',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imageStyle:{
    height: 150,
    width: '100%',
    objectFit:'contain',
    borderRadius: 4,
  },
  textDeco:{
    padding:13
  },
textname:{
  paddingTop: 2, 
  fontWeight: 'bold', 
  fontSize: 16
},
textView:{
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-start', 
  marginTop: 2,
},
textGenre:{
  fontSize: 12, 
  color: '#888'
},
textRating:{
  fontWeight: 'bold', 
  color: 'green'
},
addressView:{
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-start', 
  marginTop: 2
},
addressText:{
  fontSize: 12, 
  color: '#888',
  paddingLeft:10
}
})