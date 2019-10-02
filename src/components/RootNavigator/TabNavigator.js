import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {SignUp,Login} from './../screens'

import {brandColor} from './../../assets/style/colorVariables'


const TabNavigator = createBottomTabNavigator(
  
  {
  Restaurants: { screen: Login, params: { title: 'Restaurants' } },
  Recipes: { screen: SignUp, params: { title: 'Recipes' } },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Restaurants') {
          iconName = `cutlery`;
        } else if (routeName === 'Recipes') {
          iconName = `file-text-o`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: brandColor,
      inactiveTintColor: 'gray',
    },
  }
  );
  
  export default createAppContainer(TabNavigator);