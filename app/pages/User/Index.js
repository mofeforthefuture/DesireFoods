import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants/themes';
import Button from '../../components/Button';
import {useState} from 'react/cjs/react.development';
import {NavigationContainer} from '@react-navigation/native';
import {auth} from '../../Firebase';

function MenuItems({
  name,
  onPress,
  borderBottomWidth,
  borderTopWidth,
  icon,
  iconColor,
}) {
  return (
    <TouchableOpacity
      style={{
        ...style.displayDetails,
        borderBottomWidth: borderBottomWidth ? 1 : 0,
        borderTopWidth: borderTopWidth ? 1 : 0,
      }}
      onPress={onPress}>
      <View
        style={{flexDirection: 'row', height: '100%', alignItems: 'center'}}>
        {icon ? (
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: iconColor ? iconColor : COLORS.red,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={icon} color={COLORS.white} size={20} />
          </View>
        ) : (
          <></>
        )}
        <Text>{name}</Text>
      </View>
      <Icon name="chevron-forward-outline" color={COLORS.blue} size={20} />
    </TouchableOpacity>
  );
}
function CardDet() {
  return (
    <View
      style={{
        width: SIZES.width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{...style.displayDetails, backgroundColor: '#fff'}}>
        <Text>Card Number</Text>
        <Text>****************1398</Text>
      </View>
      <View style={{...style.displayDetails, backgroundColor: '#fff'}}>
        <Text>Expiry date</Text>
        <Text>12/21</Text>
      </View>
      <Button
        borderColor={'#1a75ff'}
        borderWidth={1}
        width={SIZES.width / 1.1}
        height={40}
        borderRadius={5}
        top={20}
        txt={'Edit'}
        color={'#1a75ff'}
      />
      <Button
        borderColor={'#ff3300'}
        borderWidth={1}
        width={SIZES.width / 1.1}
        height={40}
        borderRadius={5}
        top={10}
        txt={'Delete'}
        color={'#ff3300'}
      />
    </View>
  );
}
function UserDet() {
  return (
    <View
      style={{
        width: SIZES.width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{...style.displayDetails, backgroundColor: '#fff'}}>
        <Text>Phone Number</Text>
        <Text>09097991398</Text>
      </View>
      <View style={{...style.displayDetails, backgroundColor: '#fff'}}>
        <Text>Email</Text>
        <Text>eyimofeomotayo@gmail.com</Text>
      </View>
      <View
        style={{
          ...style.displayDetails,
          paddingVertical: 10,
          paddingRight: 10,
        }}>
        <Text style={{width: 130}}>Address</Text>
        <Text style={{}}>No 3 olasoji oke close salolo Bstop</Text>
      </View>
      <Button
        borderColor={'#1a75ff'}
        borderWidth={1}
        width={SIZES.width / 1.1}
        height={40}
        borderRadius={5}
        top={20}
        txt={'Edit'}
        color={'#1a75ff'}
      />
      <Button
        borderColor={'#ff3300'}
        borderWidth={1}
        width={SIZES.width / 1.1}
        height={40}
        borderRadius={5}
        top={10}
        txt={'Delete'}
        color={'#ff3300'}
      />
    </View>
  );
}

export default function User({navigation}) {
  const [display, setDisplay] = useState('');
  const modalizeRef = useRef(null);
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('AppFirstLaunch', {screen: 'Login'});
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={style.container}>
      <SafeAreaView></SafeAreaView>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <ScrollView style={{height: SIZES.height, width: SIZES.width}}>
          <View style={{marginBottom: SIZES.margin * 3}}>
            <View style={style.profile}>
              <TouchableOpacity style={style.image}>
                <Icon name="person-outline" color={COLORS.black} size={50} />
              </TouchableOpacity>
              <Text style={{...FONTS.medium, ...SIZES.h1, fontSize: 20}}>
                {auth.currentUser?.email}
              </Text>
            </View>
            <MenuItems
              name={'Profile'}
              icon={'person-outline'}
              iconColor={COLORS.purple}
              borderBottomWidth
              onPress={() => {
                setDisplay('Details');
                modalizeRef.current?.open();
              }}
            />
            <MenuItems
              name={'Card Details'}
              icon={'card-outline'}
              iconColor={COLORS.orange}
              borderBottomWidth
              onPress={() => {
                setDisplay('Card');
                modalizeRef.current?.open();
              }}
            />
            <MenuItems
              name={'Wallet'}
              icon={'wallet-outline'}
              iconColor={COLORS.blue}
              borderBottomWidth
              onPress={() => {
                setDisplay('Card');
                modalizeRef.current?.open();
              }}
            />
            <MenuItems
              name={'Order History'}
              icon={'restaurant-outline'}
              iconColor={COLORS.black}
              borderBottomWidth
              onPress={() => {
                setDisplay('Card');
                modalizeRef.current?.open();
              }}
            />
          </View>
          <View>
            <MenuItems
              name={'Logout'}
              icon={'exit-outline'}
              borderBottomWidth
              onPress={() => handleLogout()}
            />
          </View>
        </ScrollView>
      </View>
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
              alignItems: 'center',
              margin: 10,
              justifyContent: 'center',
            }}>
            <Icon
              name={display == 'Card' ? 'card-outline' : 'person-outline'}
              color={COLORS.red}
              size={50}
            />
            <Text style={{...FONTS.medium, ...SIZES.h1, fontSize: 20}}>
              {display == 'Card' ? 'Card' : 'Personal'} Details
            </Text>
          </View>
        }>
        <View>
          {display == 'Card' ? <CardDet /> : <UserDet />}
          <View style={{marginBottom: SIZES.margin * 10}}></View>
        </View>
      </Modalize>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  profile: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  displayDetails: {
    height: 60,
    width: SIZES.width,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: COLORS.lightHarsh,
  },
});
