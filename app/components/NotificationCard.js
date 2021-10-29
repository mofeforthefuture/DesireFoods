import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/themes';

export default function NotificationCard() {
  return (
    <TouchableOpacity style={{...style.card}}>
      <Text>card</Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  card: {
    backgroundColor: COLORS.fadeblue,
    height: 70,
    borderRadius: 10,
    marginBottom: SIZES.padding / 2,
  },
});
