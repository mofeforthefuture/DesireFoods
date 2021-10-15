import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  faLongArrowAltLeft,
  faMinus,
  faBicycle,
  faPlus,
  faStopwatch,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import Slideshow from 'react-native-image-slider-show';
import Button from '../../components/Button';
const cardimage = '../../assets/pizza.jpeg';
const arrow = '../../assets/arrowback.png';

export default function MealDisplay() {
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
      <StatusBar translucent barStyle="light-content" />

      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={{height: '40%'}}>
          <ImageBackground
            source={require(cardimage)}
            style={{
              resizeMode: 'stretch',
              width: '100%',
              height: '100%',
              marginBottom: SIZES.margin / 4,
            }}>
            <View
              style={{
                height: 60,
                width: '100%',
                justifyContent: 'center',
                paddingHorizontal: SIZES.margin,
                marginTop: SIZES.margin * 1.5,
              }}>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faLongArrowAltLeft}
                  size={25}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: '100%',
            height: '70%',
            backgroundColor: COLORS.lightHarsh,
            paddingTop: SIZES.margin,
            paddingHorizontal: SIZES.margin,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <View style={{width: '50%'}}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: '800',
                  fontSize: 25,
                }}>
                Pizza
              </Text>
            </View>
            <View style={{width: '50%', alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: '800',
                  fontSize: 15,
                }}>
                ₦6000.00
              </Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginVertical: SIZES.margin / 2}}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size={25}
              color={COLORS.red}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Thin',
                fontWeight: '400',
                fontSize: 20,
              }}>
              Heavens Pride
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <FontAwesomeIcon icon={faStopwatch} size={15} color={COLORS.blue} />
            <Text
              style={{
                fontFamily: 'Poppins-Thin',
                fontWeight: '400',
                fontSize: 12,
                marginLeft: 5,
                marginRight: 5,
              }}>
              30min |
            </Text>
            <FontAwesomeIcon icon={faBicycle} size={15} color={COLORS.blue} />
            <Text
              style={{
                fontFamily: 'Poppins-Thin',
                fontWeight: '400',
                fontSize: 12,
                marginLeft: 5,
                marginRight: 5,
              }}>
              ₦300
            </Text>
          </View>

          <Text
            style={{
              fontFamily: 'Poppins-Thin',
              fontWeight: '400',
              fontSize: 12,
              marginBottom: SIZES.margin,
            }}>
            This is one amazing pizza, eat in and you'd feel you've tasted
            heaven
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: 160,
              marginBottom: SIZES.margin * 4.5,
            }}>
            <TouchableOpacity
              onPress={() => minusQuantity()}
              style={{
                backgroundColor: COLORS.yellow,
                width: 50,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              <FontAwesomeIcon icon={faMinus} size={15} color={COLORS.white} />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: COLORS.white,
                width: 50,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => addQuantity()}
              style={{
                backgroundColor: COLORS.yellow,
                width: 50,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              <FontAwesomeIcon icon={faPlus} size={15} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Button
              top={10}
              borderRadius={10}
              width={'100%'}
              height={50}
              backgroundColor={COLORS.red}
              color={COLORS.white}
              txt={`Add (${quantity}) to basket`}
            />
          </View>
        </View>
      </View>
    </>
  );
}
