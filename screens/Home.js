import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity, ImageBackground, Image
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <ImageBackground source={require('../assets/fundo.jpg')} resizeMode="cover" style={styles.backgroundImage}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Rastreador EEI</Text>
        </View>

        <TouchableOpacity style={styles.routeCard}>
          <Image source={require('../assets/foguete.png')}></Image>
          <Text style={styles.routeText}>Localização da EEI</Text>
          <Text style={styles.knowmore}>Saiba mais...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}>
        <Image source={require('../assets/meteoro.png')}></Image>
          <Text style={styles.routeText}>Meteoros</Text>
          <Text style={styles.knowmore}>Saiba mais...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}>
        <Image source={require('../assets/escrita.png')}></Image>
          <Text style={styles.routeText}>Atualizações</Text>
          <Text style={styles.knowmore}>Saiba mais...</Text>
        </TouchableOpacity>
      
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    textAlign: 'center',
    color: '#00008B',
    marginTop: 45,
    fontSize: 25,
    fontWeight: 'bold'
  },
  knowmore:{
    color: 'red',
    paddingLeft: 80,
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold'
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover'
  }
});
