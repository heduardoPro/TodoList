import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export interface Input {
  label: string;
  placeholder?: string;
}

const InputWithLabel: React.FC<Input> = ({ label, placeholder = 'Digite aqui...', ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: 300,
  },

  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    height: 45,
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#fff',
  },

})

export default InputWithLabel;
