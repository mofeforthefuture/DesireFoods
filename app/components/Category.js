import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../constants/themes';

export default function Category({icon, name}) {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: COLORS.lightHarsh,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.margin,
      }}>
      <Icon name={icon} color={COLORS.red} size={20} />
      <Text
        style={{
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontSize: 10,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
