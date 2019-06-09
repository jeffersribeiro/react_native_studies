import React from 'react'
import {View, Alert, Platform, ToastAndroid, Button,Text} from 'react-native'

export default props => {

    const notificar = msg  =>{
        if(Platform.OS === 'android'){
ToastAndroid.show(msg, ToastAndroid.CENTER)
        }else {
            Alert.alert('Informação'.mgs)
        }
    }
    return(
        <View>
            <Button title='plataforma'
            onPress={() => notificar('parabens')}/>
        </View>

)}

