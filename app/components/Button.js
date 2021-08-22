import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Button({ backgroundColor, width, height, borderRadius, top, txt, onPress, color }) {
    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: backgroundColor,
                    width: width,
                    height: height,
                    borderRadius: borderRadius,
                    top: top,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 16,
                    position: 'relative',
                    color: color,

                }}>{txt}</Text>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
            </TouchableOpacity>

        </>
    )
}
