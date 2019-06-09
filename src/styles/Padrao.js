import { StyleSheet } from 'react-native'
import { placeholder } from '@babel/types';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    ex: {
        paddingHorizontal: 15,
        marginVertical: 5,
        fontSize: 35,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'red',
    },
    button: {
        color: 'white',
        fontSize: 20,
        position: 'relative',
        top: 100,
        textAlign: 'center',
        borderRadius: 10,
        marginLeft: 280,
        marginRight: 280,
        backgroundColor: 'black',
        padding: 15
    },
    input: {
        fontSize: 20,
        paddingLeft: 60,
        paddingRight: 60,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        backgroundColor: 'white'

    }
});

export default style;