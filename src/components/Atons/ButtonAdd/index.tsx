import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function ButtonAddTask() {
  return (
    <TouchableOpacity style={styles.buttonAdd}>
      <Text style={styles.textButton}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonAdd: {
        backgroundColor: '#67B588',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#fff',
        fontSize: 30
    }
})