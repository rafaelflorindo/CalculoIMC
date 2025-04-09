import { StyleSheet, Text, View } from 'react-native';

import CalculoIMC from './Components/CalculoIMC'

export default function App() {
  return (
    <View style={styles.container}>
      <CalculoIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
