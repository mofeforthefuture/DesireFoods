import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkerAlt,
  faSearch,
  faHamburger,
  faStar,
  faStopwatch,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar';

const cardimage = '../../assets/pizza.jpeg';

function Category({icon, name}) {
  const [focus, isFocus] = useState(false);
  return (
    <TouchableOpacity
      onBlur={() => isFocus(true)}
      style={{
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: focus ? COLORS.black : COLORS.lightHarsh,
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

function DisplayCards({url, stars, price, estTime, onPress}) {
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
        source={require(cardimage)}
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

export default function Home({navigation}) {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <View
        style={{
          flex: 1,
        }}>
        <Navbar />
        <View
          style={{
            width: '100%',
            height: '20%',
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            // paddingLeft: SIZES.margin,
          }}>
          <View
            style={{
              backgroundColor: COLORS.lightHarsh,
              height: 40,
              width: '90%',
              borderRadius: 10,
              alignItems: 'center',
              paddingLeft: SIZES.margin,
              marginLeft: SIZES.margin,
              flexDirection: 'row',
            }}>
            <FontAwesomeIcon icon={faSearch} size={20} color={'#ccc'} />
            <TextInput
              placeholder={'Search Meal'}
              style={{
                fontSize: 16,
                color: COLORS.black,
                marginLeft: SIZES.margin / 2,
              }}
            />
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: SIZES.margin, marginLeft: SIZES.margin / 2}}>
            <Category icon={'cafe'} name={'Coffee'} />
            <Category icon={'pizza'} name={'Pizza'} />
            <Category icon={'beer'} name={'Beer'} />
            <Category icon={'egg'} name={'Food'} />
            <Category icon={'basket'} name={'Food'} />
            <Category icon={'gift'} name={'Random'} />
            <Category icon={'heart'} name={'Favourites'} />
            <Category icon={'repeat'} name={'History'} />
          </ScrollView>
        </View>
        <ScrollView
          contentContainerStyle={{
            // alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
          }}
          style={{
            height: '73%',
            width: '100%',
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.padding,
          }}>
          <DisplayCards onPress={() => navigation.navigate('mealDisplay')} />
          <DisplayCards />
          <DisplayCards />
          <DisplayCards />
          <DisplayCards />
          <DisplayCards />
        </ScrollView>
      </View>
    </>
  );
}
