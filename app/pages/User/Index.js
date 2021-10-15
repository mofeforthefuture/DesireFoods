import React, {useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES} from '../../constants/themes';
import Button from '../../components/Button';
import {useState} from 'react/cjs/react.development';

function CardDet() {
  return (
    <View
      style={{
        width: SIZES.width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={style.displayDetails}>
        <Text>Card Number</Text>
        <Text>****************1398</Text>
      </View>
      <View style={style.displayDetails}>
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
      <View style={style.displayDetails}>
        <Text>Phone Number</Text>
        <Text>09097991398</Text>
      </View>
      <View style={style.displayDetails}>
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

export default function User() {
  const [display, setDisplay] = useState('');
  const modalizeRef = useRef(null);
  return (
    <View style={style.container}>
      <SafeAreaView></SafeAreaView>
      <View style={style.profile}>
        <TouchableOpacity style={style.image}>
          <Icon name="person-outline" color={COLORS.black} size={50} />
        </TouchableOpacity>
        <Text style={{...FONTS.medium, ...SIZES.h1, fontSize: 20}}>
          Eyimofe Omotayo
        </Text>
      </View>
      <TouchableOpacity
        style={style.displayDetails}
        onPress={() => {
          setDisplay('Display');
          modalizeRef.current?.open();
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>My Details</Text>
        </View>
        <Icon name="chevron-forward-outline" color={COLORS.black} size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.displayDetails}
        onPress={() => {
          setDisplay('Card');
          modalizeRef.current?.open();
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>Card Details</Text>
        </View>
        <Icon name="chevron-forward-outline" color={COLORS.black} size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={style.displayDetails}>
        <Text>History</Text>
        <Icon name="chevron-forward-outline" color={COLORS.black} size={20} />
      </TouchableOpacity>

      <Modalize
        modalHeight={SIZES.height / 1.6}
        overlayStyle={{backgroundColor: 'rgba(35, 52, 93, 0.8)', opacity: 0.6}}
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
    backgroundColor: '#fff',
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
  },
});
