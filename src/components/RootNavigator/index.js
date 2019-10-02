import React from 'react';
import {ScrollView,Text,View,Modal} from 'react-native'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator,DrawerNavigatorItems } from 'react-navigation-drawer';

//Screens
import {Login,SignUp,Dashboard,AuthLoadingScreen} from './../screens';

//Custom Components
import {HamBurgerDrawer,CustomDrawer,AddTaskModal} from './../customComponents'

const DashboardNav = createStackNavigator({
  Second: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'Task List',
      headerLeft: <HamBurgerDrawer navigationProps={navigation} />,
      headerRight:<AddTaskModal/> ,
      headerTintColor: '#828282'
    }),
  },
});

export const AuthorizedRootNav = createDrawerNavigator({
  Dashboard: {
        screen: DashboardNav,
        navigationOptions: {
          drawerLabel: 'Task List'
        }
    }
},
	{
    initialRouteName: "Dashboard",
    contentComponent:(props)=><CustomDrawer {...props}/>
  }
);


const UnauthorizedRootNav = createStackNavigator({

  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Dashboard: {
    screen: AuthorizedRootNav
  }
},
{
  initialRouteName: 'Login',
  headerMode: 'none'
}
);


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AuthorizedRootNav,
      Auth: UnauthorizedRootNav,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
