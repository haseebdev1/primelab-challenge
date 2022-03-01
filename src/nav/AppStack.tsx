import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import AuthenticationScreen from '../screens/AuthenticationScreen';
import HomeScreen from '../screens/HomeScreen';

const {Navigator, Screen} = createStackNavigator();

const StackNav: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Authentication" component={AuthenticationScreen} />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default StackNav;
