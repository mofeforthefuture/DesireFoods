import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Touchable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkerAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../constants/themes';

const Navbar = ({onPress, Back}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: '8%',
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '82%',
          }}>
          {Back ? (
            <TouchableOpacity onPress={onPress}>
              <Icon name="arrow-back-outline" color={COLORS.black} size={20} />
            </TouchableOpacity>
          ) : (
            <>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size={20}
                color={COLORS.red}
              />
              <Text>8,CMD rd, Magodo</Text>
            </>
          )}
        </View>
        {Back ? (
          <></>
        ) : (
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={onPress}>
            <View
              style={{
                ...style.alertBadge,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.small1,
                  fontWeight: '700',
                }}>
                2
              </Text>
            </View>
            <Icon name={'notifications-outline'} color={COLORS.red} size={25} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
export default Navbar;

const style = StyleSheet.create({
  alertBadge: {
    backgroundColor: COLORS.lightblue,
    color: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    height: 18,
    width: 18,
    position: 'relative',
    left: 5,
  },
});

//A man will do what a man wills to do
