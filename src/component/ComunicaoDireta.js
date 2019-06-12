import React,{Component} from 'react';
import {View, Text} from 'react-native'

const fonte = { style:{fontSize:30} }
const cor ={ style:{color:'red'} }

export const Filho = props =>{
    return(<View>
        <Text {...fonte}>Filho: {props.nome}{props.sobrenome}</Text>
    </View>
    )}
export const Pai = props => {
    return(
    <View>
        <Text {...fonte}>Pai: {props.nome}{props.sobrenome}</Text>
        {props.children}
    </View>
    )}
 const Avo = props => {
     return(
    <View>
        <Text {...fonte}>Avô: {props.nome}{props.sobrenome}</Text>
        <Pai nome='André ' sobrenome={props.sobrenome}>
            <Filho nome='Ana '/>
            <Filho nome='Gui '/>
            <Filho nome='Davi '/>
        </Pai>    
        <Pai {...props} nome='Pedro '>
            <Filho nome='Rebecca '/>
            <Filho nome='Renato '/>  
        </Pai>
    </View>
    )}
    
    export default Avo
