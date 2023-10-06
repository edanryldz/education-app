import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ContentDetail from './src/screens/ContentDetail';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProfilScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStack = createStackNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: '#09182b',
        },
      })}>
      <Tab.Screen
        name="Ana Ekran"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('././Icons/home.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hesabım"
        component={ProfilTabNavigator}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('././Icons/user.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeTabNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Content" component={ContentDetail} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}

function ProfilTabNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <HomeStack.Screen name="Profil" component={ProfilScreen} />
    </HomeStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Content: ContentDetail,
//     Login: LoginScreen,
//     Register: RegisterScreen,
//   },
//   {
//     initialRouteName: 'Login',
//     defaultNavigationOptions: {
//       headerShown: false,
//     },
//   },
// );

// export default createAppContainer(navigator);
