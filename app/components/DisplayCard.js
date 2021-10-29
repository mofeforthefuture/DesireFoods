import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkerAlt,
  faStar,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';

export default function DisplayCards({onPress, image}) {
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
        <Icon name={'location-outline'} color={COLORS.red} size={15} />
        <Text
          style={{
            fontFamily: 'Poppins-Thin',
            fontWeight: '400',
            fontSize: 12,
          }}>
          Heavens Pride
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.margin / 2.5,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'stopwatch'} color={COLORS.blue} size={15} />
          <Text
            style={{
              fontFamily: 'Poppins-Thin',
              fontWeight: '400',
              fontSize: 12,
            }}>
            30min
          </Text>
        </View>
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
          }}>
          <Icon name={'cash'} color={COLORS.green} size={15} />
          <Text
            style={{
              fontFamily: 'Poppins-Thin',
              fontWeight: '700',
              fontSize: 15,
            }}>
            ₦ 4,800
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
