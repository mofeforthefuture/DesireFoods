import React, {useState} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {Navbar, NotificationCard} from '../../components';

export default function Notifications({navigation}) {
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
        <ScrollView
          style={{
            height: SIZES.height,
            width: SIZES.width,
            paddingHorizontal: SIZES.padding / 2,
          }}>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </ScrollView>
      </View>
    </>
  );
}

const style = StyleSheet.create({});
