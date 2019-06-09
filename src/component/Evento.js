import React from 'react'
import { View, Text, TextInput } from 'react-native'
import style from '../styles/Padrao'

export default class Evento extends React.Component{
    
    state = { 
        texto:''   
    }
    alterarTexto = texto => {
        this.setState({ texto })
    }

    render(){
        return(
        <View>
            <Text>{this.state.texto}</Text>
                <TextInput value={this.state.texto} 
                style={style.input}
                onChangeText={this.alterarTexto}/>
        </View>  
    )}
}