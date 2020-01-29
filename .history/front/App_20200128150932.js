import React from 'react';
import Usuario from './screens/usuario';
import { StyleSheet } from 'react-native';


export default function App() {

  return (
    <Usuario />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#367698',
    color: 'white'
  }
});
