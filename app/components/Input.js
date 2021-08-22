import React from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import { COLORS, SIZES } from '../constants/themes'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Input({ name, placeholder }) {
    return (
        <>
            <View style={{
                width: '80%',
                height: 50,
                borderColor: COLORS.black,
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: SIZES.margin

            }}>
                <View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', paddingLeft: SIZES.padding - 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: COLORS.red }}>{name}</Text>
                </View>
                <Text style={{ fontSize: 20 }}>|</Text>
                <View style={{ width: '69%', flexDirection: 'row', alignItems: 'center', paddingLeft: SIZES.padding / 4 }}>
                    <TextInput placeholder={placeholder} style={{ color: COLORS.blue, fontSize: 16, }} />
                </View>
            </View>
        </>
    )
}
