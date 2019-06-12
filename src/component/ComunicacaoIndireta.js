import React, { Component } from 'react'
import {View, Text,TextInput} from 'react-native'
import style from '../styles/Padrao'

export const Entrada = () => 
    
        <View>
            <TextInput value={props.texto} 
           style={style.input}
           onChangeText={this.chamarQuandoMudar}/>
        </View>

const fonte40 = {style:{fontSize:40}}

    export class TextoSincronizado extends Component{
        state={
            texto:''
        }
        AlterarTexto = texto => {
            this.setState({texto})
        }
        render(){
            return(
                <View>
                    <Text{...fonte40}/>
                </View>
            )}
        }