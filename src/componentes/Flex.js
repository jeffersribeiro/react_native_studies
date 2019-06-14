import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
    },
    norte:{
        flex:1, 
        backgroundColor:'green',
        alignItems: 'center',
        justifyContent:'center',

    },
    centro:{
        flex:2,
        flexDirection: 'row',
        backgroundColor:'yellow',
        alignItems:'center',
    },
    sul:{
        backgroundColor:'gray',
    },
    circulo:{
        width:50,
        height:50,
        backgroundColor:'red',
        borderRadius: 50,
    }
})
const Circulo = props => <View style={styles.circulo}/>

export default prop => {
    return(
        
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo/>
            </View>
            <View style={styles.centro}>
                <Circulo/>
                <Circulo/>
                <Circulo/>
            </View>
            <View style={styles.sul}>
                <Circulo/>
            </View>
        </View>
    )
}