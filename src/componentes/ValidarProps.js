import React, { useState } from 'react'
import {Text} from 'react-native'
import PropTypes from 'prop-types';

const ValidarProps = ({ label, ano}) => {
    const [state] = useState('ola')

    return ( 
        <Text style={{fontSize:35}}>
            {label}
            {ano}
            {state}
        </Text>
    )
} 
ValidarProps.defaultProps = {
    label :'O ano é: ',
    ano: 2000,
}
ValidarProps.propTypes = {
    label: PropTypes.string,
    ano : PropTypes.number
}
export default ValidarProps;
