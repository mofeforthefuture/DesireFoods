import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({navigation}) {
  return (
    <>
      <SafeAreaView style={{height: 100}}></SafeAreaView>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 90,
            height: 80,
            backgroundColor: COLORS.red,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginBottom: SIZES.margin * 2,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 60,
              fontFamily: 'RampartOne-Regular',
            }}>
            De
          </Text>
        </View>
        <Text
          style={{
            color: COLORS.black,
            fontWeight: '700',
            fontSize: 40,
          }}>
          Login
        </Text>

        <Input name={'Number'} placeholder={'08123456789'} />

        <Input name={'Password'} placeholder={'*******'} />
        <TouchableOpacity
          style={{
            position: 'relative',
            alignSelf: 'flex-end',
            marginRight: '10%',
          }}>
          <Text style={{color: COLORS.red}}>Forgot password?</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '80%',
            alignItems: 'flex-end',
            marginTop: SIZES.margin * 2.5,
          }}>
          <Button
            top={10}
            borderRadius={10}
            width={'100%'}
            height={50}
            backgroundColor={COLORS.red}
            color={COLORS.white}
            txt={'Login'}
            onPress={() => navigation.replace('Main')}
          />
          <View
            style={{
              width: '100%',
              marginTop: '20%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>
              Don't have an account yet?
              <Text
                onPress={() => navigation.replace('Register')}
                style={{color: COLORS.red}}>
                Register now
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
