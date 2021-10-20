import React, {useState, useRef} from 'react';
import {View, SafeAreaView, ScrollView, TextInput} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import {Navbar, DisplayCards, Category, MealModal} from '../../components';

const cardimage = '../../assets/pizza.jpeg';

export default function Index({navigation}) {
  const [display, setDisplay] = useState('Card');
  const modalizeRef = useRef(null);
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
          <DisplayCards
            image={require(cardimage)}
            onPress={() => modalizeRef.current?.open()}
          />
          <DisplayCards image={require(cardimage)} />
          <DisplayCards image={require(cardimage)} />
          <DisplayCards image={require(cardimage)} />
          <DisplayCards image={require(cardimage)} />
          <DisplayCards image={require(cardimage)} />
        </ScrollView>
        <MealModal ref={modalizeRef} />
      </View>
    </>
  );
}
