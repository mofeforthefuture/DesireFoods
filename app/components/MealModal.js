import React, {useState, useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, FONTS} from '../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapMarkerAlt, faStopwatch} from '@fortawesome/free-solid-svg-icons';
import {Button} from '../components';

export default function MealModal({image, ref}) {
  const modalizeRef = useRef(null);

  return (
    <View>
      <Modalize
        modalHeight={SIZES.height / 1.6}
        overlayStyle={{
          backgroundColor: 'rgba(35, 52, 93, 0.8)',
          opacity: 0.6,
        }}
        modalStyle={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        snapPoint={SIZES.height / 1.3}
        ref={modalizeRef}
        HeaderComponent={
          <View
            style={{
              width: SIZES.width,
              height: SIZES.height / 3,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              overflow: 'hidden',
            }}>
            <Image
              source={image}
              style={{
                resizeMode: 'contain',
                width: '100%',
                marginBottom: SIZES.margin / 4,
              }}
            />
          </View>
        }>
        <View>
          <View
            style={{
              width: SIZES.width,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
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
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size={15}
                color={COLORS.red}
              />
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
              style={{flexDirection: 'row', marginLeft: SIZES.margin / 2.5}}>
              <FontAwesomeIcon
                icon={faStopwatch}
                size={15}
                color={COLORS.blue}
              />
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
                <Icon name={'heart'} color={COLORS.red} size={50} />
              </View>
            </View>
            <Button
              top={10}
              borderRadius={10}
              width={'95%'}
              height={50}
              backgroundColor={COLORS.yellow}
              color={COLORS.white}
              txt={`Add (6) to basket`}
            />
          </View>
        </View>
      </Modalize>
    </View>
  );
}
