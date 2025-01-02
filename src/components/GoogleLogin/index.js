import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const GoogleLogin = ({ title, onPress, style }) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container} >
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin);

