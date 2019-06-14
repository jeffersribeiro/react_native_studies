import React, { Component } from 'react'
import {View, Text,TextInput} from 'react-native'
import style from '../styles/Padrao'

const Entrada = props => 
        <View>
            <TextInput value={props.texto} 
           style={style.input}
           onChangeText={this.chamarQuandoMudar}/>
        </View>

const fonte40 = {style:{fontSize:40}}

    export default class TextoSincronizado extends Component{
        state={
            texto: null
        }
        AlterarTexto = texto => {
            this.setState({texto})
        }
        render(){
            return(
                <View>
                    <Text {...fonte40}>{this.state.texto}</Text>
                    <Entrada texto={this.state.texto}
                        chamarQuandoMudar={this.AlterarTexto}/>
                </View>
            )}
        }