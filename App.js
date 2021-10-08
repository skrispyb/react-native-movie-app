import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './src/components/layout/Header';
import NavBar from './src/components/layout/NavBar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
        <NavigationContainer>
          <NavBar />
        </NavigationContainer>
      <StatusBar style='light' />
    </NativeBaseProvider>
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
