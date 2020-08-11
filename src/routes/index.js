import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// CUSTOM IMPORTS
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>

    {/* <Tab.Navigator>
      <Tab.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="SignUp" component={SignUp} />

    </Tab.Navigator> */}
  </NavigationContainer>
);

export default Routes;
