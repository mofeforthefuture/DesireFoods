import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Animatable from 'react-native-animatable';
import {COLORS, SIZES} from '../../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {loginSchema} from '../../helpers/Schemas';
import {auth} from '../../Firebase';

export default function Login({navigation}) {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Main', {screen: 'BottomTab'});
      }
    });
  }, []);
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (email, password, resetForm) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('res', user);
        navigation.replace('Main', {screen: 'BottomTab'});
      })
      .catch(err => console.log('Error', err));
    resetForm();
  };
  return (
    <>
      <SafeAreaView style={{height: 100}}></SafeAreaView>
      <ScrollView style={{width: SIZES.width, height: SIZES.height}}>
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
          <Formik
            validateOnMount={true}
            validationSchema={loginSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(payload, {resetForm}) => {
              handleSubmit(payload.email, payload.password, resetForm);
              console.log(payload);
            }}>
            {({
              handleChange,
              handleSubmit,
              values,
              setFieldTouched,
              setFieldValue,
              errors,
              touched,
            }) => (
              <>
                <View style={{width: SIZES.width, alignItems: 'center'}}>
                  {errorMessage ? (
                    <Animatable.Text
                      animation="bounceInLeft"
                      style={{
                        color: COLORS.red,
                        margin: SIZES.margin / 4,
                      }}>
                      {errorMessage}
                    </Animatable.Text>
                  ) : (
                    <></>
                  )}
                  <Input
                    name={'Email'}
                    placeholder={'kemi@gmail.com'}
                    onBlur={() => setFieldTouched('email')}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && touched.email && (
                    <View style={{width: '80%'}}>
                      <Animatable.Text
                        animation="bounceInLeft"
                        style={{
                          color: COLORS.red,
                          margin: SIZES.margin / 10,
                        }}>
                        {errors.email}
                      </Animatable.Text>
                    </View>
                  )}

                  <Input
                    name={'Password'}
                    placeholder={'*******'}
                    onBlur={() => setFieldTouched('password')}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                  />
                  {errors.password && touched.password && (
                    <View style={{width: '80%'}}>
                      <Animatable.Text
                        animation="bounceInLeft"
                        style={{
                          color: COLORS.red,
                          margin: SIZES.margin / 10,
                        }}>
                        {errors.password}
                      </Animatable.Text>
                    </View>
                  )}
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
                      onPress={handleSubmit}
                    />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      marginTop: SIZES.margin * 2,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>
                      Already have an account?{' '}
                      <Text
                        onPress={() => navigation.navigate('Register')}
                        style={{color: COLORS.red}}>
                        Register
                      </Text>
                    </Text>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
}
