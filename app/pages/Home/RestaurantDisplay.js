import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  faMinus,
  faBicycle,
  faPlus,
  faStopwatch,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import accounting from 'accounting';
import Back from '../../components/Back';
const cardimage = '../../assets/restaurantPicture.jpeg';
const logo = '../../assets/restaurantLogo.jpeg';

export default function RestaurantDisplay({navigation}) {
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
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 60,
                width: '100%',
                justifyContent: 'center',
                paddingHorizontal: SIZES.margin,
                marginTop: SIZES.margin * 1.5,
              }}>
              <Back onPress={() => navigation.goBack()} />
            </View>
            <View>
              <Image
                source={require(logo)}
                style={{
                  resizeMode: 'contain',
                  width: '40%',
                  height: '100%',
                  marginBottom: SIZES.margin / 4,
                }}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  quantityBtn: {
    backgroundColor: COLORS.yellow,
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
