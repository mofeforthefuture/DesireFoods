import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../constants/themes';

export default function CheckoutCard({image}) {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={{...style.card}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{height: 60, width: 60, borderRadius: 5, overflow: 'hidden'}}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: 20,
            marginLeft: SIZES.margin / 2,
            marginBottom: SIZES.margin / 10,
          }}>
          Pizza
        </Text>
      </View>
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name={'cash'} color={COLORS.green} size={20} />
        <Text
          style={{
            fontFamily: 'Poppins-Thin',
            fontWeight: '700',
            fontSize: 20,
          }}>
          ₦4,800
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 100,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
          style={{
            ...style.quantityBtn,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}>
          <Icon name={'remove-outline'} color={COLORS.white} size={20} />
        </TouchableOpacity>
        <View
          style={{
            ...style.quantityBtn,
            backgroundColor: COLORS.white,
          }}>
          <Text style={{...SIZES.body1}}>{quantity}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={{
            ...style.quantityBtn,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}>
          <Icon name={'add-outline'} color={COLORS.white} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  card: {
    backgroundColor: COLORS.fadeblue,
    height: 70,
    borderRadius: 10,
    marginBottom: SIZES.padding / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: SIZES.padding,
  },
  quantityBtn: {
    backgroundColor: COLORS.black,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
