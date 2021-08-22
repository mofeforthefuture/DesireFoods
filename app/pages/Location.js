import React from 'react'
import { View, Text, Image } from 'react-native'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from '../assets/map.png'

export default function Location() {
    return (
        // <View style={{ flex: 1 }}>
        //     <MapView
        //         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        //         style={{ flex: 1 }}
        //         region={{
        //             latitude: 37.78825,
        //             longitude: -122.4324,
        //             latitudeDelta: 0.015,
        //             longitudeDelta: 0.0121,
        //         }}
        //     >
        //     </MapView>
        // </View>
        <>
            <View style={{ flex: 1 }}>
                <Image source={MapView} />
            </View>
        </>
    )
}
