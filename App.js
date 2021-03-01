import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import SerieDetailsScreen from './src/screens/SerieDetailsScreen';
import PersonalRateScreen from './src/screens/PersonalRateScreen';
import HomeScreen from './src/screens/HomeScreen';
import LogOutScreen from './src/screens/LogOutScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  },{
    headerMode: 'none'
    }),
  mainflow: createBottomTabNavigator({
    DetailFlow: createStackNavigator({
      Home: HomeScreen,
      SerieDetails: SerieDetailsScreen
    },{
      headerMode: 'none'
      }),
    PersonalRate: PersonalRateScreen,
    LogOut: LogOutScreen,

  })  
});

export default createAppContainer(switchNavigator)