import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapInputs from '../../components/MapInputs';
import Button from '../../components/Button';
import {COLORS, SIZES} from '../../constants/themes';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default function Location({navigation}) {
  return (
    <>
      <View style={{flex: 1}}>
        {/* <Image source={MapView} style={{ resizeMode: 'cover', height: '70%' }} /> */}
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 6.619638,
            longitude: 3.365499,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
        <View
          style={{
            position: 'absolute',
            height: '70%',
            width: '100%',
            backgroundColor: COLORS.red,
            top: '60%',
            borderRadius: SIZES.margin * 2,
            alignItems: 'center',
            paddingTop: SIZES.margin * 2,
          }}>
          <MapInputs placeholder={'Enter City'} />
          <MapInputs placeholder={'Select Area'} dropDown={true} />
          <Button
            top={30}
            borderRadius={10}
            width={'85%'}
            height={50}
            backgroundColor={COLORS.white}
            color={COLORS.red}
            txt={'Continue'}
            onPress={() => navigation.replace('BottomTab')}
          />
        </View>
      </View>
    </>
  );
}
