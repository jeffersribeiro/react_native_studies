import React from 'react'
import { Text, View } from 'react-native'
import style from '../styles/Padrao'
import If from './If'
state={
    numero :4
}

export default function () {
    return(
    <View>
        <If test={this.state.numero % 2 == 0}>
            <Text style={style.ex}>Par</Text>
        </If>
        <If test={this.state.numero % 2 == 1}>
            <Text style={style.ex}>Impar</Text>
        </If>
    </View>
    )}