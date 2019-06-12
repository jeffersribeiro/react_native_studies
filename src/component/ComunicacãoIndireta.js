import raect from 'raect'
import {View,Text} from 'react-native'

const fonte= { style:{fontSize: 30, color:'red'} } 

export const filho = props => {
    return(
        <View>
            <Text {...fonte}>Filho: {props.nome}{props.sobrenome}</Text>
        </View>
    )
}
export const Pai = props => {
    return(
        <View>
        <Text {...fonte} >Pai: {props.nome}{props.sobrenome}</Text>
        {props.children}
        </View>
    )
}
 const Avo = props => {
    return(
        <View>
        <Text {...fonte}>Filho: {props.nome}{props.sobrenome}</Text>
        <Pai nome='andre'> {props.sobrenome}
            <Filho nome='teste1'/>
            <Filho nome='teste1'/>
        </Pai>
        
        <Pai {...props} nome='João'>
            <Filho nome='teste1'/>
            <Filho nome='teste1'/>
        </Pai>
        </View>
    )}
 export default Avo