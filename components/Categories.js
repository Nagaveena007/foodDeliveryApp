import React, { useLayoutEffect, useState, useEffect } from "react";
import { 
    ScrollView,
    StyleSheet,
    View,
    Text
  } from "react-native";
  import CategoryCards from "./CategoryCards";
function Categories() {
  const {  categoryScrollView,
} = styles
const [featuredDishes, setFeaturedDishes] =useState([])

useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('https://deliveroo-database.onrender.com/dishes');
      const data = await response.json();
      setFeaturedDishes(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, []);

  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    style={categoryScrollView}>
       
 {/* category card */}
  <>
          {featuredDishes.map((dish,index) => (
            < CategoryCards 
            key={index} 
            name={dish.name}
            price={dish.price}
            imgUrl={dish.image}
            short_description={dish.short_description}
            />
          ))}  
    </>  
   
{/*   <CategoryCards imgUrl='https://t3.ftcdn.net/jpg/02/95/33/44/360_F_295334437_7PH6byrEfFqqZxzyj84zMGWZuAMILmnI.jpg' name='Discount'/>
 <CategoryCards imgUrl='https://www.ndr.de/ratgeber/kochen/rezepte/salat600_v-fullhd.jpg' name='Salat'/>
 <CategoryCards imgUrl='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg' name='Burger'/> 
  <CategoryCards imgUrl='https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg' name='Pizza'/>
 <CategoryCards imgUrl='https://thumbs.dreamstime.com/b/asian-food-cooking-wok-noodles-chicken-stir-fry-vegetables-ingredients-spices-sauces-chopsticks-dark-rustic-83701227.jpg' name='Asia'/>
 <CategoryCards imgUrl='https://links.papareact.com/gn7' name='Sushi'/>
 <CategoryCards imgUrl='https://st3.depositphotos.com/1699440/18541/i/600/depositphotos_185410716-stock-photo-lemonades-lemons-cucumbers-limes-grapefruits.jpg' name='Drinks'/>
 <CategoryCards imgUrl='https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek=' name='Desert'/>
  */}


 </ScrollView>
  )
}

export default Categories;
const styles = StyleSheet.create({
  categoryScrollView:{
    paddingTop:10, paddingHorizontal:15
  }
  })