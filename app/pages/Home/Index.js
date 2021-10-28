import React, {useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {Modalize} from 'react-native-modalize';
import {
  faSearch,
  faMapMarkerAlt,
  faStopwatch,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import {Navbar, DisplayCards, Category, Button} from '../../components';

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
                source={require(cardimage)}
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
                paddingTop: SIZES.padding / 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: SIZES.width,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    fontSize: 30,
                    marginLeft: SIZES.margin / 2.5,
                    marginBottom: SIZES.margin / 10,
                  }}>
                  Pizza
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: SIZES.margin / 2.5,
                  }}>
                  <TouchableOpacity>
                    <Icon name={'heart'} color={COLORS.red} size={50} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: SIZES.width,
                  marginLeft: SIZES.margin / 2.5,
                  marginBottom: SIZES.margin / 4,
                }}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size={25}
                  color={COLORS.red}
                />
                <Text
                  style={{
                    fontFamily: 'Poppins-Thin',
                    fontWeight: '400',
                    fontSize: 22,
                  }}>
                  Heavens Pride
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: SIZES.margin / 2.5,
                  width: SIZES.width,
                }}>
                <FontAwesomeIcon
                  icon={faStopwatch}
                  size={22}
                  color={COLORS.blue}
                />
                <Text
                  style={{
                    fontFamily: 'Poppins-Thin',
                    fontWeight: '400',
                    fontSize: 22,
                  }}>
                  30min
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: 160,
                  marginBottom: SIZES.margin,
                }}>
                <TouchableOpacity
                  style={{
                    ...style.quantityBtn,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}>
                  <FontAwesomeIcon
                    icon={faMinus}
                    size={15}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    ...style.quantityBtn,
                    backgroundColor: COLORS.white,
                  }}>
                  <Text style={{...SIZES.body1}}>6</Text>
                </View>
                <TouchableOpacity
                  style={{
                    ...style.quantityBtn,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                  }}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    size={15}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              </View>
              <Button
                top={10}
                borderRadius={10}
                width={'95%'}
                height={50}
                backgroundColor={COLORS.black}
                color={COLORS.white}
                txt={`Add (6) to basket`}
              />
            </View>
          </View>
        </Modalize>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  quantityBtn: {
    backgroundColor: COLORS.black,
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
