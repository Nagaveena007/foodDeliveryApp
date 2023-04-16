import { 
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const { 
    ScrollContainer,
    image,
    container,
    antText,
    headLineText,
    antLocationText,
    searchView,
    search,
    textInput,
    categoryScrollView,
  } = styles

  const navigation = useNavigation();
const [featuredCategories, setFeaturedCategories] =useState([])
   useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://deliveroo-database.onrender.com/restaurants');
        const data = await response.json();
        setFeaturedCategories(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  console.log(featuredCategories,'featuredDishes')

  return (
    <SafeAreaView 
    style={ScrollContainer}
    >
      {/* Header*/}
      <View style={container}>
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          style={image}
        />
        <View style={headLineText}>
          <Text style={antText}>Deliver Now!</Text>
          <Text
          style={antLocationText}
          >
            Current Location
            <Entypo name="chevron-down" size={20} color="#00BBCC" />
          </Text>
        </View>
        <AntDesign name="user" size={30} color="#00BBCC" />
      </View>
      {/* Search*/}
      <View 
      style={searchView}
      >
        <View style={search}>
          <AntDesign name="search1" size={20} color="gray" />
             <TextInput
                placeholder="Restaurants and cuisines"
                keyboardType="default"
                style={textInput}
              >
              </TextInput>
        </View>
        <Entypo name="sound-mix" size={24} color="#00BBCC" /> 
      </View>
      {/* Body*/}
      <ScrollView 
      style={categoryScrollView}
>
       <Categories />
  {featuredCategories?.map((category,index) => {
  return(
  <FeaturedRow
    key={index} 
    address={category.address}
    dishes={category.dishes}
    genre={category.genre}
    image={category.image}
    lat={category.lat}
    long={category.long}
    name={category.name}
    featured={category.featured}
    tasteyDiscounts={category.tasteyDiscounts}
    offersNearYou={category.offersNearYou}
    rating={category.rating}
    title={category.title}
  />
)})}  
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
      />  */} 
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  ScrollContainer:{
    backgroundColor:'white',
    paddingTop:50,
  },
  container:{
   display:'flex',
   flexDirection:'row',
   paddingBottom:10,
   alignItems:'center',
   margin:10,
   marginLeft:4
  },
  headLineText:{
    flex:1,
    marginLeft:15,
  },
  antText:{
  fontWeight:'bold',
  color:'gray',
  fontSize:10,
  },
  antLocationText:{
  fontWeight:'bold',
  color:'black',
  fontSize:20,
  },
  image:{
    backgroundColor:'gray',
    height:40,
    width:40,
    padding:4,
    borderRadius:50
  },
searchView:{
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: 2,
  alignItems: 'center',
  marginHorizontal: 4,
  gap: '0.5rem'
},
search:{
  display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', gap: '0.5rem', backgroundColor: '#E2E8F0', padding: 12
},
textInput:{
  flex:1
},
categoryScrollView:{
  backgroundColor:'#f7fafc',
  paddingBottom:100
},
featuredText:{ fontWeight: 'bold', fontSize: 16 },
titleText:{ color: '#888', paddingHorizontal: 4, fontSize: 12 },

})