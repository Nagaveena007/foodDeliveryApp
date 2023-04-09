import { 
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,

} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
const [featuredCategories, setFeaturedCategories] =useState([])
   useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type== "featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }`
        );
        setFeaturedCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [sanityClient]); 
/*   useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []); */
 console.log(featuredCategories,'featuredCategories')
  return (
    <SafeAreaView className='bg-white pt-6 mt-8'>
      {/* Header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ml-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-8 w-8 bg-gray-300 p-4 rounded-full"
        />
        <View className='flex-1 '>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <Entypo name="chevron-down" size={20} color="#00BBCC" />
          </Text>
        </View>
        <AntDesign name="user" size={30} color="#00BBCC" />
      </View>
      {/* Search*/}
      <View className="flex-row pb-2 items-center mx-4 space-x-2">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
          <AntDesign name="search1" size={20} color="gray" />
             <TextInput
                placeholder="Restaurants and cuisines"
                keyboardType="default"
              >
              </TextInput>
        </View>
        <Entypo name="sound-mix" size={24} color="#00BBCC" /> 
      </View>
      {/* Body*/}
      <ScrollView className='bg-gray-100'
      contentContainerStyle={{
        paddingBottom:100,
      }}>
        <Categories />

 {featuredCategories?.map((category) => (
  <FeaturedRow
    key={category._id}
    id={category._id}
    title={category.name}
    description={category.short_description}
  />
))} 
     {/*  <FeaturedRow
      title='Featured'
      description='lorem ipsum'
      FeturedCategory='featured'
      id='1'
      />
      <FeaturedRow
      title='Tastey Discounts'
      description='lorem ipsum'
      FeturedCategory='featured'
      id='2'
      />
      <FeaturedRow
      title='Offer near you!'
      description='lorem ipsum'
      FeturedCategory='featured'
      id='3'
      />   */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
