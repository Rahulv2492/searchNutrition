import React, { Component } from 'react';
import { View, Image } from 'react-native'
import loader from './../../assets/img/loader.gif';
const Loader = () => {
    return (
        <View>
            <Image source={loader} style={{ width: 70, height: 70 }} />
        </View>
    )
}
export default Loader;
