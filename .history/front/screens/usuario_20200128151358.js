import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacityBase, TextInput } from 'react-native';

const url = "http://192.168.100.12:3000/back/usuario"

export default class Localitation extends Component {

  constructor(){
    super();
    this.state = {
      nombre: null
    }
  }

  getUbicacion(){
    navigator.geolocation.getCurrentPosition((posicion) => {
      let latitud= posicion.coords.latitude;
      let longitud = posicion.coords.longitude;
      var fecha = new Date();
      let data =  {
        user: 'Henry',
        fecha: fecha,
        ubicacion: `${latitud.toString()}, ${longitud.toString()}`,
      }

      const header = {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
  
      return fetch(url,header)
      .then((response) => response.json())
      .then((responseJson) => {
        alert('Ubicacion guardada exitosamente!')
      })
      .catch((error) => {
        console.log(error)
      })
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text>Tu npmbre</Text>
          <TextInput style={{ height: 50}} onChangeText={(text)=>{this.setState({nombre: text})}}/>
        </View>
          <Button title="Ubicación" style={styles.boton} onPress={this.getLocalitation}/>
      </View>
    )  
  }
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