import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {COLORS, SIZES} from '../constants/themes';

export default function NotificationCard({title, message}) {
  return (
    <TouchableOpacity style={{...style.card}}>
      <View
        style={{
          height: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{...SIZES.h1, color: COLORS.black, fontWeight: '600'}}>
          {title}
        </Text>
        <Text style={{...SIZES.h1, color: COLORS.gray}}>30,Oct 2020</Text>
      </View>
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{...SIZES.h2, color: COLORS.black}}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  card: {
    backgroundColor: COLORS.fadeblue,
    height: 70,
    borderRadius: 10,
    marginBottom: SIZES.padding / 2,
    paddingHorizontal: SIZES.padding / 4,
    paddingVertical: SIZES.padding / 4,
  },
});
