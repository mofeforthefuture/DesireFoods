import React from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import { COLORS, SIZES } from '../constants/themes'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




function Input({ name, placeholder }) {
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

export default function Login() {
    return (
        <>
            <SafeAreaView style={{ height: 100, }}></SafeAreaView>
            <View style={{
                alignItems: 'center'
            }}>
                <View style={{
                    width: 90,
                    height: 80,
                    backgroundColor: COLORS.red,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginBottom: SIZES.margin * 2,
                }}>
                    <Text style={{
                        color: COLORS.white,
                        fontSize: 60,
                        fontFamily: 'RampartOne-Regular',
                    }}>
                        De
                    </Text>
                </View>
                <Text style={{
                    color: COLORS.black,
                    fontWeight: '700',
                    fontSize: 40,
                }}
                >
                    Login
                </Text>
                <FontAwesomeIcon icon={faCoffee} />


                <Input
                    name={'Number'}
                    placeholder={'08123456789'}
                />

                <Input
                    name={'Password'}
                    placeholder={'*******'}
                />
            </View>
        </>
    )
}
