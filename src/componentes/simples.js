import React from 'react';
import { View, Text,TouchableNativeFeedback } from 'react-native'

export default function(){
    return(
    <View style={{flex:1,textAlign:'center',justifyContent:'center'}}>
        <TouchableNativeFeedback
        onPress={this._onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{width: 70, height: 50, backgroundColor: 'salmon', borderRadius:15}}>
        <Text style={{textAlign:'center',justifyContent:'center', paddingTop:15}}>Button</Text>
      </View>
    </TouchableNativeFeedback> 
    </View>
    )}
