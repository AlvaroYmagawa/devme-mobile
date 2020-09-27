import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';

// CUSTOM IMPORTS
import { colors } from '../styles';

// AUTH
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import CompleteProfile from '../screens/auth/CompleteProfile';

// SIGNED
import Home from '../screens/signed/Home';
import MyProfile from '../screens/signed/MyProfile';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  // REDUCER
  const isProfileCompleted = useSelector((state) => state.user.profile.displayName);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // FUNCTIONS
  const Auth = () => (
    <AppStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.primaryDark,
        },
        headerTintColor: colors.strongText,
        headerTitleStyle: {
          display: 'none',
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: colors.primaryDark,
        },
      }}
    >
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="SignUp" component={SignUp} />
    </AppStack.Navigator>
  );

  const CompleteProfileStack = () => (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.primaryDark,
        },
        headerTitleStyle: {
          color: colors.strongText,
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: colors.primary,
          backgroundColor: colors.primaryDark,
          elevation: 0,
        },
      }}
    >
      <AppStack.Screen name="CompleteProfile" component={CompleteProfile} options={{ title: 'Complete seu perfil' }} />
    </AppStack.Navigator>
  );

  const Signed = () => (isProfileCompleted ? (
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

            case 'MyProfile':
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
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  ) : <CompleteProfileStack />);

  return (
    <NavigationContainer>
      {user ? <Signed /> : <Auth />}

    </NavigationContainer>
  );
};

export default Routes;
