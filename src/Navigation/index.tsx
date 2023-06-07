import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WelocomePage from '../Screens/welocomePage';
import HomePage from '../Screens/homePage';
import MoreInformation from '../Screens/moreInformation';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welocome"
          component={WelocomePage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="MoreInformation"
          component={MoreInformation}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
