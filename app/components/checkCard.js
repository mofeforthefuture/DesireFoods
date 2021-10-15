import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {COLORS} from '../constants/themes';
// import check from '../assets/'

const CheckCard = () => {
  const [checkState, setCheckState] = useState(true);
  return (
    <TouchableOpacity
      onPress={() => setCheckState(!checkState)}
      style={{
        width: 250,
        height: 150,
        backgroundColor: COLORS.fadeblue,
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingRight: 15,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 20}}>BNB/Busd</Text>
      <Text style={{fontSize: 20}}>430.7</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 15, color: COLORS.gray}}>+2.84%</Text>
        <Image
          source={require('../assets/check.png')}
          style={{
            width: 23,
            height: 23,
            resizeMode: 'contain',
            opacity: checkState ? 1 : 0.3,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CheckCard;
