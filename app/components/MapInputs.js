import React from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
// import Geolocation from 'react-native-geolocation-service';
import { COLORS, SIZES } from '../constants/themes'





export default function MapInputs({ placeholder, dropDown }) {

    return (
        <View style={{
            width: '85%',
            height: 40,
            borderColor: COLORS.black,
            borderStyle: 'solid',
            // borderWidth: 0.5,
            borderRadius: 7,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: SIZES.margin,
            backgroundColor: COLORS.white,

        }}>
            <View style={{
                width: '10%',
                flexDirection: 'column',
                alignItems: 'center',
                paddingLeft: SIZES.padding - 5,
                paddingRight: SIZES.padding,
                paddingTop: dropDown ? 0 : SIZES.padding,
                paddingBottom: dropDown ? SIZES.padding : 0,
            }}>
                {dropDown ?
                    <>
                        <View style={{ width: 2, height: 20, backgroundColor: COLORS.red }}></View>
                        <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: COLORS.red }}></View>
                    </>
                    :
                    <>
                        <View style={{ width: 10, height: 10, backgroundColor: COLORS.red }}></View>
                        <View style={{ width: 2, height: 20, backgroundColor: COLORS.red }}></View>
                    </>
                }
            </View>
            <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', paddingLeft: SIZES.padding / 4 }}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.black}
                    style={{ color: COLORS.black, fontSize: 16, }} />
            </View>
        </View >
    )
}
