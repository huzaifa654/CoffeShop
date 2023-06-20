import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoffeeDetail from './Screens/CoffeeDetail';
import OrderCompleted from './Screens/OrderCompleted';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator  initialRouteName='Home' screenOptions={{
        headerShown: false,
      }}  ><Stack.Screen  name='Home' component={Home}/>
      
      <Stack.Screen  name='CoffeeDetail' component={CoffeeDetail}/>
      <Stack.Screen  name='OrderCompleted' component={OrderCompleted}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})