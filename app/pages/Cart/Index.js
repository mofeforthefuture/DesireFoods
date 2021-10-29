import React, {useState} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {CheckoutCard, Navbar} from '../../components';
const cardimage = '../../assets/pizza.jpeg';

export default function Cart({navigation}) {
  const [quantity, setQuantity] = useState(1);
  function addQuantity() {
    setQuantity(quantity + 1);
  }
  function minusQuantity() {
    if (quantity == 0) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
    }
  }
  return (
    <>
      <StatusBar translucent barStyle="dark-content" />
      <SafeAreaView style={{}} />
      <Navbar Back onPress={() => navigation.goBack()} />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        <View style={{height: SIZES.height / 3}}>
          <ScrollView
            style={{
              height: SIZES.height / 2,
              width: SIZES.width,
              paddingHorizontal: SIZES.padding / 2,
            }}>
            <CheckoutCard image={require(cardimage)} />
            <CheckoutCard image={require(cardimage)} />
            <CheckoutCard image={require(cardimage)} />
            <CheckoutCard image={require(cardimage)} />
            <CheckoutCard image={require(cardimage)} />
            <CheckoutCard image={require(cardimage)} />
            <CheckoutCard image={require(cardimage)} />
            <CheckoutCard image={require(cardimage)} />
            <CheckoutCard image={require(cardimage)} />
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({});
