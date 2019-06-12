import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Inverter, { MegaSena } from './component/Multi'
import Simples from './component/simples'
import ParImpar from './component/ParImpar'
import Contador from './component/Contador'
import Plataforma from './component/Plataforma'
import teste from './component/ValidarProps'
import Evento from './component/Evento'
import Avo from './component/ComunicaoDireta'
 

const AppContainer =  createDrawerNavigator({
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
