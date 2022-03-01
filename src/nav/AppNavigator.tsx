import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
