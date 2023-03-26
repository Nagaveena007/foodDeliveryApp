import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Fontisto } from '@expo/vector-icons';
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
            <Fontisto color='#00CCBB' name="arrow-right-l" size={24}  />
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
                 id={123}
                 imgUrl='https://links.papareact.com/gn7'
                 title='sushi'
                 rating={4.5}
                 genre='Japanees'
                 address='Ihringen 79241'
                 short_description='This is an short description'
                 dishes={[]}
                 long={20}
                 lat={10}
                />
                <RestaurantCard
                 id={123}
                 imgUrl='https://links.papareact.com/gn7'
                 title='sushi'
                 rating={4.5}
                 genre='Japanees'
                 address='Ihringen 79241'
                 short_description='This is an short description'
                 dishes={[]}
                 long={20}
                 lat={10}
                />
                <RestaurantCard
                 id={123}
                 imgUrl='https://links.papareact.com/gn7'
                 title='sushi'
                 rating={4.5}
                 genre='Japanees'
                 address='Ihringen 79241'
                 short_description='This is an short description'
                 dishes={[]}
                 long={20}
                 lat={10}
                />
                <RestaurantCard
                 id={123}
                 imgUrl='https://links.papareact.com/gn7'
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
