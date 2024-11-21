import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Add } from 'iconsax-react-native'


const FloatActionButton = props  => {
    return (
        <TouchableOpacity {...props} style={styles.container}>
            <Add size="32" color="#fff" />
        </TouchableOpacity>
    )
}

export default FloatActionButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        right: 30,
        backgroundColor: '#2ccce4',
        borderRadius:50,
        width:70,
        height:70,
       position:'absolute'

        


    }
})