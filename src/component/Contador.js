import React ,{Component} from 'react'
import {Text, View, TouchableHighlight, TouchableNativeFeedback} from 'react-native'
import style from '../styles/Padrao'
import { TextInput } from 'react-native-gesture-handler';

export default class Contador extends Component{


    state={
        numero:'0',
        text:''
    }

     maisUm() {
         this.setState({
            numero: this.state.text
         })
     }
    limpar = () => {
        this.setState({
            numero:'',
            text: null 
        })
    }
render(){
    return(
        <View style={style.container}>
            <TextInput placeholder='Digite Algo' style={style.input}
            onChangeText={(text) => this.setState({text})}>
            </TextInput>
            <Text style={{color:'black', fontSize:40}}>{this.state.numero}</Text>
            <TouchableNativeFeedback
            onPress={() => this.maisUm()}
            onLongPress={this.limpar}>
                <Text style={style.button}>
                    Incrementar/Zerar
                </Text>
            </TouchableNativeFeedback>
        </View>
    )}

}
