import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

// CUSTOM IMPORTS
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

import { colors } from '../styles';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  // REDUCER
  const signed = useSelector((state) => state.auth.signed);

  // FUNCTIONS
  const Sign = () => (
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
    </AppStack.Navigator>
  );

  const App = () => (
    <Tab.Navigator
      headerMode
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = focused ? colors.accent : colors.primary;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;

            case 'Profile':
              iconName = 'person';
              break;

            default: break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.accent,
        inactiveTintColor: colors.primary,
        style: {
          paddingBottom: 4,
          backgroundColor: colors.background,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {signed ? <App /> : <Sign />}

    </NavigationContainer>
  );
};

export default Routes;
