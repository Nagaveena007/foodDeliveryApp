import { View, Text, useAnimatedValue,StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-web'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
    const {
        basketContainer,
        currency,
        CartItems,
        totalCart,

    } = styles
  return (
      <View style={basketContainer}> 
        <TouchableOpacity style={totalCart}>
         <Text style={CartItems}>{items.length}</Text>
         <Text>View Basket</Text>
              <Text style={currency}>
                  <MaterialCommunityIcons name="currency-eur" size={24}  quantity={basketTotal} />
              </Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon;
const styles = StyleSheet.create({
    basketContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        zIndex:50
    },
    currency: {
        color: '#ffff',
        fontWeight: 'bold',
    },
    CartItems: {
        color: '#ffff',
        fontWeight: 'bold',
        backgroundColor: '#336b46',
        paddingTop: 4, 
        paddingBottom: 4,
        paddingLeft: 8, 
        paddingRight: 8,
        marginTop: 4,
        marginBottom: 4,
    },
    totalCart: {
        backgroundColor: 'rgb(184, 228, 192)',
        display:'flex',
        flexDirection: 'row',
        marginLeft: 20, 
        marginRight: 20,
        padding: 16, 
        borderRadius: 10,
    }
})