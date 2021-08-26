import * as React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faUtensils, faUser } from '@fortawesome/free-solid-svg-icons'
import User from '../pages/User/Index';
import { COLORS } from '../constants/themes';
import Cart from '../pages/Cart/Index';
import Home from '../pages/Home/Index';



const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
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
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faHome} size={20} color={focused ? COLORS.red : COLORS.black} />
                    </View>
                )
            }} />

            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faUtensils} size={20} color={focused ? COLORS.red : COLORS.black} />

                    </View>
                )
            }} />
            <Tab.Screen name="User" component={User} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10,
                    }}>
                        <FontAwesomeIcon icon={faUser} size={20} color={focused ? COLORS.red : COLORS.black} />

                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}