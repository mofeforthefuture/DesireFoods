import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES, } from '../../constants/themes'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLongArrowAltLeft, faSearch, faHamburger, faStar, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import Slideshow from 'react-native-image-slider-show';

const cardimage = '../../assets/pizza2.jpeg'
const arrow = '../../assets/arrowback.png'

export default function MealDisplay() {
    return (
        <>
            {/* <SafeAreaView style={{ backgroundColor: COLORS.white }}></SafeAreaView> */}
            <StatusBar translucent barStyle="light-content" />

            <View style={{ flex: 1 }}>
                {/* <View style={{ height: 60, width: '100%', backgroundColor: COLORS.white, justifyContent: 'center', paddingHorizontal: SIZES.margin }}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} size={25} />
                    </TouchableOpacity>
                </View> */}
                <View style={{ height: '40%' }}>
                    <Slideshow
                        style={{ resizeMode: 'stretch', width: '100%', height: '100%', marginBottom: SIZES.margin / 4 }}
                        dataSource={[
                            { url: cardimage },
                            { url: 'http://placeimg.com/640/480/any' },
                            { url: 'http://placeimg.com/640/480/any' }
                        ]} />
                    {/* <Image source={require(cardimage)} style={{ resizeMode: 'stretch', width: '100%', height: '100%', marginBottom: SIZES.margin / 4 }} /> */}
                </View>
            </View>
        </>
    )
}
