import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Inverter, { MegaSena } from './componentes/Multi'
import Simples from './componentes/simples'
import ParImpar from './componentes/ParImpar'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataforma'
import teste from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'
import Button from './componentes/Button'
 

const AppContainer =  createDrawerNavigator({
    Button:{
        screen:() => <Button />,
        navigationOptions:{title: 'Calculadora'}
    },
    Flex:{
        screen: Flex
    },
    ListaFlex:{
        screen: ListaFlex
    },
    TextoSincronizado:{
        screen: TextoSincronizado
    },
    Avo:{
         screen:() => <Avo nome='João ' sobrenome='Ribeiro'/>
     },
    Evento:{
        screen:() => <Evento />
    },
    ValidarProps:{
        screen: teste
    },
    plataforma:{
        screen: () => <Plataforma />
    },
    Contador:{
        screen: () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena />,
        navigationOptions:{title: 'Mega Senha'}
    }, 
    Inverter:{
        screen:()=> <Inverter />,
        navigationOptions:{title: 'Inverter'}
    },
    ParImpar:{
        screen:() => <ParImpar />,
        navigationOptions:{title: 'Par Impar'}
    },
    Simples:{
        screen: ()=> <Simples />,
        navigationOptions:{title: 'Simples'}
    },
    
}
,{
    drawerBackgroundColor:"rgba(100,100,100,0.9)",

})
export default class App extends React.Component{
    render(){
        return(
        <AppContainer />
        )}
}
