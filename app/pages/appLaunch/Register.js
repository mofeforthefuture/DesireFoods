import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {Formik} from 'formik';
import * as Animatable from 'react-native-animatable';
import {Input, Button} from '../../components';
import {registerSchema} from '../../helpers/Schemas';
import {auth} from '../../Firebase';

export default function Register({navigation}) {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = (email, password, resetForm) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        setSuccessMessage('Registration Successful');
        console.log('res', user);
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
            Register
          </Text>

          <Formik
            validateOnMount={true}
            validationSchema={registerSchema}
            initialValues={{
              email: '',
              password: '',
              passwordConfirmation: '',
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
                  {successMessage ? (
                    <Animatable.Text
                      animation="bounceInLeft"
                      style={{
                        color: COLORS.green,
                        margin: SIZES.margin / 4,
                      }}>
                      {successMessage}
                    </Animatable.Text>
                  ) : (
                    <></>
                  )}
                  <Input
                    name={'Email'}
                    placeholder={'kemi@gmail.com'}
                    onBlur={() => setFieldTouched('email')}
                    onChangeText={handleChange('email')}
                    value={values.email}
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
                    value={values.password}
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
                  <Input
                    name={'Confirm Password'}
                    placeholder={'*******'}
                    onBlur={() => setFieldTouched('passwordConfirmation')}
                    onChangeText={handleChange('passwordConfirmation')}
                    secureTextEntry={true}
                    value={values.passwordConfirmation}
                  />
                  {errors.passwordConfirmation && touched.passwordConfirmation && (
                    <View style={{width: '80%'}}>
                      <Animatable.Text
                        animation="bounceInLeft"
                        style={{
                          color: COLORS.red,
                          margin: SIZES.margin / 10,
                        }}>
                        {errors.passwordConfirmation}
                      </Animatable.Text>
                    </View>
                  )}
                  <View
                    style={{
                      width: '80%',
                      alignItems: 'flex-end',
                      marginTop: SIZES.margin * 2.5,
                    }}>
                    {successMessage ? (
                      <Button
                        top={10}
                        borderRadius={10}
                        width={'100%'}
                        height={50}
                        backgroundColor={COLORS.blue}
                        color={COLORS.white}
                        txt={'Back To Login'}
                        onPress={() => navigation.navigate('Login')}
                      />
                    ) : (
                      <Button
                        top={10}
                        borderRadius={10}
                        width={'100%'}
                        height={50}
                        backgroundColor={COLORS.red}
                        color={COLORS.white}
                        txt={'Register'}
                        onPress={handleSubmit}
                      />
                    )}
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
                        onPress={() => navigation.navigate('Login')}
                        style={{color: COLORS.red}}>
                        Login
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
