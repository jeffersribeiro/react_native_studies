import React, { Component } from 'react';
import { scrollView, View, Text } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler';

const Alunos = [
    { id: 1, nome: 'jeferson', nota: 9.9 },
    { id: 2, nome: 'guilherme', nota: 3.9 },
    { id: 3, nome: 'laura', nota: 8.3 },
    { id: 4, nome: 'lucas', nota: 7.5 },
    { id: 5, nome: 'julio', nota: 8.9 },
    { id: 6, nome: 'alesandra', nota: 6.9 },
    { id: 7, nome: 'paulo', nota: 5.9 },
    { id: 8, nome: 'henrique', nota: 9.5 },
    { id: 9, nome: 'algusto', nota: 5.9 },
    { id: 10, nome: 'algusto', nota: 5.9 },
    { id: 11, nome: 'jeferson', nota: 9.9 },
    { id: 12, nome: 'guilherme', nota: 3.9 },
    { id: 13, nome: 'laura', nota: 8.3 },
    { id: 14, nome: 'lucas', nota: 7.5 },
    { id: 15, nome: 'julio', nota: 8.9 },
    { id: 16, nome: 'alesandra', nota: 6.9 },
    { id: 17, nome: 'paulo', nota: 5.9 },
    { id: 18, nome: 'henrique', nota: 9.5 },
    { id: 19, nome: 'algusto', nota: 5.9 },
    { id: 20, nome: 'algusto', nota: 5.9 },
]
const itemlist = {
    paddingHorizontal: 15,
    height:50,
    backgroundColor:'#DDD',
    borderWidth:0.5,
    borderColor:'#222'
}

export const Aluno = props =>
<View style={itemlist}>
<Text>Nome: {props.nome}</Text>
<Text style={{fontWeight:'bold'}}>Nota: {props.nota}</Text>
</View>
export default props => {
    const renderIterm = ({item}) => {
return <Aluno {...item} />
    }
    return(
        <ScrollView>
            <FlatList data={Alunos} renderItem={renderIterm}
            keyExtractor={(_,index) => index.toString()} />
        </ScrollView>
    )
}

