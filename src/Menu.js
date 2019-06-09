import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Inverter, { MegaSena } from './component/Multi'
import Simples from './component/simples'
import ParImpar from './component/ParImpar'
import Contador from './component/Contador'
import Plataforma from './component/Plataforma'
import ValidarProps from './component/ValidarProps'
import Evento from './component/Evento'

function Teste () {
    return null
}

const AppContainer =  createDrawerNavigator({
    Evento:{
        screen:() => <Evento />
    },
    ValidarProps:{
        screen: () => <ValidarProps ano={19} />
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
