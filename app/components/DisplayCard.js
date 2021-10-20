import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {COLORS, SIZES} from '../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkerAlt,
  faStar,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';

export default function DisplayCards({
  url,
  stars,
  price,
  estTime,
  onPress,
  image,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 200,
        width: '44%',
        backgroundColor: COLORS.lightHarsh,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: SIZES.margin,
        marginBottom: SIZES.margin,
      }}>
      <Image
        source={image}
        style={{
          resizeMode: 'stretch',
          width: '100%',
          height: '60%',
          marginBottom: SIZES.margin / 4,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: 15,
            marginLeft: SIZES.margin / 2.5,
            marginBottom: SIZES.margin / 5,
          }}>
          Pizza
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: SIZES.margin / 2.5,
          marginBottom: SIZES.margin / 4,
        }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} size={15} color={COLORS.red} />
        <Text
          style={{
            fontFamily: 'Poppins-Thin',
            fontWeight: '400',
            fontSize: 12,
          }}>
          Heavens Pride
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: SIZES.margin / 2.5}}>
        <FontAwesomeIcon icon={faStopwatch} size={15} color={COLORS.blue} />
        <Text
          style={{
            fontFamily: 'Poppins-Thin',
            fontWeight: '400',
            fontSize: 12,
          }}>
          30min
        </Text>
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            marginLeft: SIZES.margin * 2,
          }}>
          <FontAwesomeIcon icon={faStar} size={15} color={COLORS.red} />
          <Text
            style={{
              fontFamily: 'Poppins-Thin',
              fontWeight: '400',
              fontSize: 15,
            }}>
            4.8
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
