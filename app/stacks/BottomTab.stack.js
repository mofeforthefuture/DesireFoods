import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants/themes';
import Cart from '../pages/Cart/Index';
import HomeScreen from './HomeScreeens.stack';

import UserScreens from './User.stack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: COLORS.white,
          height: '7%',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="home"
                color={focused ? COLORS.red : COLORS.black}
                size={20}
              />
              <Text style={{color: focused ? COLORS.red : COLORS.black}}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="fast-food"
                color={focused ? COLORS.red : COLORS.black}
                size={20}
              />
              <Text style={{color: focused ? COLORS.red : COLORS.black}}>
                Order
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreens}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="person"
                color={focused ? COLORS.red : COLORS.black}
                size={20}
              />
              <Text style={{color: focused ? COLORS.red : COLORS.black}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
