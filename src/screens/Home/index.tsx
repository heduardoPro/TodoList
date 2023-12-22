import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonAddTask from '../../components/Atons/ButtonAdd'
import  Input  from '../../components/Atons/Input'

export default function Home() {
  return (
    <View>
      <ButtonAddTask />
      <View>
        <Input label='Teste' placeholder='Teste'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})