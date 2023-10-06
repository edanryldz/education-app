import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ContentDetail from './src/screens/ContentDetail';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Tabs from './src/screens/Tab';

const Tab = createBottomTabNavigator(
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
  </Tab.Navigator>,
);

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Content: ContentDetail,
    Login: LoginScreen,
    Register: RegisterScreen,
    Tabs: Tabs,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(navigator);
