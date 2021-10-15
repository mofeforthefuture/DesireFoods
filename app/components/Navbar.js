import React from 'react'
import { View, TouchableOpacity,Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { COLORS,SIZES } from '../constants/themes'

const Navbar = () => {
    return(
        <>
         <View style={{
                    width: '100%',
                    height: '8%',
                    backgroundColor:COLORS.white,
                    flexDirection: 'row',
                    alignItems:'center'
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
                            height: 22,
                            width: 22,
                            position: 'relative',
                            left: 5,
                        }}>
                            <Text style={{ color: COLORS.white, }}>2</Text>
                        </View>
                        <FontAwesomeIcon icon={faShoppingBasket} size={20} color={COLORS.red} />
                    </TouchableOpacity>
                </View>
        </>
    )
}
export default Navbar