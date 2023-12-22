import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
;
import Home from './src/screens/Home/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleMain}>Todo List</Text>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141325',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleMain: {
    fontSize: 50,
    fontWeight: '700',
    color: 'white',
  },
});
