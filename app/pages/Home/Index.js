import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES, } from '../../constants/themes'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt, faSearch, faHamburger, faStar, faStopwatch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

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

function DisplayCards({ url, stars, price, estTime, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            height: 200,
            width: '44%',
            backgroundColor: COLORS.lightHarsh,
            borderRadius: 20, overflow: 'hidden',
            marginRight: SIZES.margin,
            marginBottom: SIZES.margin
        }}>
            <Image source={require(cardimage)} style={{ resizeMode: 'stretch', width: '100%', height: '60%', marginBottom: SIZES.margin / 4 }} />
            <View style={{ flexDirection: 'row' }}>
                <Text
                    style={{
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        fontSize: 15,
                        marginLeft: SIZES.margin / 2.5,
                        marginBottom: SIZES.margin / 5
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



export default function Home({ navigation }) {
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
                    flexDirection: 'row'


                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: SIZES.margin,
                        width: '82%'
                    }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color={COLORS.red} />
                        <Text>8,CMD rd, Magodo</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <View style={{
                            backgroundColor: COLORS.lightblue,
                            color: COLORS.white, alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 19,
                            height: 20,
                            width: 20,
                            position: 'relative',
                            left: 5
                        }}>
                            <Text style={{ color: COLORS.white, }}>2</Text>
                        </View>
                        <FontAwesomeIcon icon={faShoppingBasket} size={20} color={COLORS.red} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: COLORS.white,
                    justifyContent: 'center',
                    // paddingLeft: SIZES.margin,
                }}>

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
                        <FontAwesomeIcon icon={faSearch} size={20} color={'#ccc'} />
                        <TextInput
                            placeholder={'Search Meal'}
                            style={{ fontSize: 16, color: COLORS.black, marginLeft: SIZES.margin / 2 }}
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
                    <DisplayCards onPress={() => navigation.navigate('mealDisplay')} />
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
