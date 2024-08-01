// navigation/Navigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FloorPlanScreen from '../screens/FloorPlanScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FloorPlan" component={FloorPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
