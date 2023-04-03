import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from "./RestaurantCard";
export default function FeaturedRow({
    title,
     discription,
     FeturedCategory
    }) {
  return (
    <View>
        <View className='mt-4 flex-row item-center justify-between px-4'>
             <Text className='font-bold text-lg'>{title}</Text>
            <AntDesign name="arrowright" size={24} color='#00CCBB' />
      </View>
             <Text className='text-gray-500 px-4 font- text-xs'>{title}</Text>
             <ScrollView 
             horizontal
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{
                paddingTop:10,
                paddingHorizontal:15,
              }}
              className='pt-4'
             >
                {/* Restaurant cards */}
                <RestaurantCard
                 id={1}
                 imgUrl='https://www.daindiacurry.com/wp-content/uploads/2020/02/curry-overhead-1024x655.jpg'
                 title='Indian curry house'
                 rating={4.5}
                 genre='Indian'
                 address='Freiburg 79241'
                 short_description='This is an short description'
                 dishes={[]}
                 long={20}
                 lat={10}
                />
                <RestaurantCard
                 id={2}
                 imgUrl='https://madeinitaly.com.au/wp-content/uploads/2021/09/Made-In-Italy-Stanmore.jpeg'
                 title='Gio-Gusto'
                 rating={4.5}
                 genre='Italian'
                 address='Ihringen 79241'
                 short_description='This is an short description'
                 dishes={[]}
                 long={20}
                 lat={10}
                />
                <RestaurantCard
                 id={3}
                 imgUrl='https://prod-wolt-venue-images-cdn.wolt.com/5e0213d02936d4cdca857a51/819ec7e6e6589028c452bf91c8c375dc'
                 title='sushi'
                 rating={4.5}
                 genre='Japanees'
                 address='Ihringen 79241'
                 short_description='This is an short description'
                 dishes={[]}
                 long={20}
                 lat={10}
                />
             
             </ScrollView>

    </View>
  );
}
