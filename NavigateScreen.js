import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} />
    </Stack.Navigator>
  );
};

export {HomeScreenNavigator};
