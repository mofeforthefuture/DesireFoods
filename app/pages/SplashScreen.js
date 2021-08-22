import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../constants/themes'

export default function SplachScreen({ navigation }) {
    function goToLogin() {
        navigation.navigate('Login')
    }
    useEffect(() => {
        setTimeout(goToLogin, 2000)
    }, []);
    return (
        <>
            <View style={{
                backgroundColor: COLORS.red,
                flex: 1,
                alignItems: 'center',
                paddingTop: '40%'
            }}>
                <Text style={{
                    color: COLORS.white,
                    fontSize: 60,
                    fontFamily: 'RampartOne-Regular'
                }}>
                    De
                </Text>
                <Text style={{
                    color: COLORS.white,
                    fontSize: 20,
                    fontFamily: 'Arial-ItalicMT'
                }}
                >
                    satisfying your desires...
                </Text>


            </View>
        </>
    )
}
