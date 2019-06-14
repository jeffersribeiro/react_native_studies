import React from 'react';
import  {FlatList, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const aluno=[
    {id:1, nome:'jefferson', nota:7.9},
    {id:2, nome:'jefferson', nota:7.9},
    {id:3, nome:'jefferson', nota:7.9},
    {id:4, nome:'jefferson', nota:7.9},
    {id:5, nome:'jefferson', nota:7.9},
]
const itemList={
    padding: 15,
    backgroundColor:'red',
}
export const Aluno = props =>{
    <View style={itemList}>
        <Text>Nome:{props.nome}</Text>
        <Text>Nome:{props.nota}</Text>
    </View>
export default props =>{
   const renterItem = ({item}) =>{
       return <Aluno {...item}/>
   }
}
return(
    <ScrollView>
        <FlatList data={aluno} renderItem={renderItem}
        keyExtractor={(_,index) => index.toString()}
        />
    </ScrollView>
)
}
