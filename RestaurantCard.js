import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Octicons } from '@expo/vector-icons';
import { urlFor } from "../sanity";

const RestaurantCard = ({
  id,
  image,
  name,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {

  return (
    <TouchableOpacity 
    className='bg-white mr-3 shadow'
    >
      <Image source={{
          uri: urlFor(image).url(),
        }}
        className='h-36 w-64 rounded-sm'
      />
      < View className='px-3 pb-4'>
        <Text className='pt-2 font-bold text-lg'>{name} </Text>
        < View className='flex-row items-center space-x-1'>
          <Octicons name="star" size={22} color="green" opacity={0.5} />
          <Text className='text-xs twxt-gray-500'>
            <Text className='text-green-500 '>{rating} </Text> . {genre}
          </Text> 
        </View>
      <View className='flex-row items-center space-x-1'>
      <Octicons name="location" opacity={0.4} size={22} color="gray" />
      <Text className='text-xs twxt-gray-500'>Nearby . {address}
      </Text>
      </View>

      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
