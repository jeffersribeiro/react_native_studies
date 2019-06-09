import React from 'react'
import { Text } from 'react-native'
import style from '../styles/Padrao'
state={
    numero:0,
    texto:'Ola'
}
export const Inverter = function() {
    const inv = this.state.texto.split('').reverse().join('')
    return <Text style = { style.ex } > { inv } </Text>
}
export const MegaSena = function() {

        const [min, max] = [1,60]
        const numeros = Array(this.state.numeros || 6).fill(0)

    for(let i=0;i < numeros.length; i++){
        let novo;
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1)) +min
        }
        numeros[i] = novo;
    }
    numeros.sort((a, b) => a - b) 
    return <Text style={style.ex}>{numeros.join(', ')}</Text>
}

export default Inverter;