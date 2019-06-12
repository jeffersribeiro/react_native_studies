import React, { Component } from 'react'
import {View, Text,TextInput} from 'react-native'
import style from '../styles/Padrao'
import { typeAlias } from '@babel/types';

export const Entrada = () => {

    return(
        <View>
            <TextInput value={props.texto} 
           style={style.input}
           onChangeText={this.chamarQuandoMudar}/>
        </View>
    )}
