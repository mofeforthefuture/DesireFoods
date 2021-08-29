import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES, } from '../../constants/themes'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt, faSearch, faHamburger, faStar, faStopwatch } from '@fortawesome/free-solid-svg-icons'

const cardimage = '../../assets/pizza.jpeg'


function Category({ icon, name }) {
    const [focus, isFocus] = useState(false)
    return (
        <TouchableOpacity
            onBlur={() => isFocus(true)}
            style={{
                width: 50,
                height: 50,
                borderRadius: 15,
                backgroundColor: focus ? COLORS.black : COLORS.lightHarsh,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: SIZES.margin
            }}>
            <FontAwesomeIcon icon={icon} size={20} color={COLORS.red} />
            <Text
                style={{
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    fontSize: 10,
                }}
            >{name}</Text>
        </TouchableOpacity >
    )
}

function DisplayCards({ url, stars, price, estTime }) {
    return (
        <TouchableOpacity style={{ height: 200, width: '44%', backgroundColor: COLORS.lightHarsh, borderRadius: 20, overflow: 'hidden', marginRight: SIZES.margin, marginBottom: SIZES.margin / 2 }}>
            <Image source={require(cardimage)} style={{ resizeMode: 'stretch', width: '100%', height: '60%', marginBottom: SIZES.margin / 4 }} />
            <View style={{ flexDirection: 'row' }}>
                <Text
                    style={{
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        fontSize: 15,
                        marginLeft: SIZES.margin / 2.5,
                    }}
                >Pizza</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: SIZES.margin / 2.5, marginBottom: SIZES.margin / 4 }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size={15} color={COLORS.red} />
                <Text
                    style={{
                        fontFamily: 'Poppins-Thin',
                        fontWeight: '400',
                        fontSize: 12,
                    }}
                >Heavens Pride</Text>

            </View>
            <View style={{ flexDirection: 'row', marginLeft: SIZES.margin / 2.5 }}>
                <FontAwesomeIcon icon={faStopwatch} size={15} color={COLORS.blue} />
                <Text
                    style={{
                        fontFamily: 'Poppins-Thin',
                        fontWeight: '400',
                        fontSize: 12,
                    }}
                >30min</Text>
                <View style={{ position: 'relative', flexDirection: 'row', marginLeft: SIZES.margin * 2 }}>
                    <FontAwesomeIcon icon={faStar} size={15} color={COLORS.red} />
                    <Text
                        style={{
                            fontFamily: 'Poppins-Thin',
                            fontWeight: '400',
                            fontSize: 15,
                        }}
                    >4.8</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}



export default function Home() {
    return (
        <>
            <SafeAreaView></SafeAreaView>
            <View style={{
                flex: 1,
            }}>

                <View style={{
                    width: '100%',
                    height: '7%',
                    backgroundColor: COLORS.white,
                    justifyContent: 'center',


                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: SIZES.margin
                    }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color={COLORS.red} />
                        <Text>8,CMD rd, Magodo</Text>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: COLORS.white,
                    justifyContent: 'center',
                    // paddingLeft: SIZES.margin,
                }}>
                    {/* <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontWeight: '800',
                            fontSize: 20,
                        }}
                        >Hello Mofe,</Text>
                        <Text
                        style={{
                            fontFamily: 'Poppins-Thin',
                            fontSize: 15,
                        }}
                    >Here are some of our best meals.</Text> */}
                    <View style={{
                        backgroundColor: COLORS.lightHarsh,
                        height: 40,
                        width: '90%',
                        borderRadius: 10,
                        alignItems: 'center',
                        paddingLeft: SIZES.margin,
                        marginLeft: SIZES.margin,
                        flexDirection: 'row'
                    }}>
                        <FontAwesomeIcon icon={faSearch} size={20} color={COLORS.red} />
                        <TextInput
                            placeholder={'Search Meal'}
                            style={{ fontSize: 16, color: COLORS.lightblue, marginLeft: SIZES.margin / 2 }}
                        />
                    </View>
                    <ScrollView horizontal={true} style={{ marginTop: SIZES.margin, marginLeft: SIZES.margin / 2 }}>
                        <Category
                            icon={faHamburger}
                            name={'Food'}
                        />
                        <Category
                            icon={faHamburger}
                            name={'Food'}
                        />
                        <Category
                            icon={faHamburger}
                            name={'Food'}
                        />
                        <Category
                            icon={faHamburger}
                            name={'Food'}
                        />
                        <Category
                            icon={faHamburger}
                            name={'Food'}
                        />
                        <Category
                            icon={faHamburger}
                            name={'Food'}
                        />
                        <Category
                            icon={faHamburger}
                            name={'Food'}
                        />
                        <Category
                            icon={faHamburger}
                            name={'Food'}
                        />
                    </ScrollView>
                </View>
                <ScrollView contentContainerStyle={{
                    alignItems: 'flex-start',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }} style={{ height: '73%', width: '100%', backgroundColor: COLORS.white, paddingHorizontal: SIZES.padding }}>
                    <DisplayCards />
                    <DisplayCards />
                    <DisplayCards />
                    <DisplayCards />
                    <DisplayCards />
                    <DisplayCards />
                </ScrollView>
            </View>
        </>
    )
}
