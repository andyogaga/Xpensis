import React from 'react';
import { createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import { Image, Dimensions } from 'react-native';
import Home from './../screens/home/index';
import Expenses from '../screens/expenses';
import Incomes from './../screens/incomes/index';
import CustomDrawerContentComponent from './drawer';
import { PRI_COLOR } from './../utils/constants/colors';
import SplashScreen from './../screens/splash/SplashScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: 'Home',
        drawerIcon: () => (
          <Image
            source={require('../assets/icons/home.png')}
            style={{
              width: 18,
              height: 18,
            }}
          />
        ),
      })
    },
    Expenses: {
      screen: Expenses,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: 'Expenses',
        drawerIcon: () => (
          <Image
            source={require('../assets/icons/expense.png')}
            style={{
              width: 18,
              height: 18,
            }}
          />
        ),
      })
    },
    Incomes: {
      screen: Incomes,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: 'Incomes',
        drawerIcon: () => (
          <Image
            source={require('../assets/icons/income.png')}
            style={{
              width: 18,
              height: 18
            }}
          />
        ),
      })
    }
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <CustomDrawerContentComponent {...props} />,
    contentOptions: {
      activeTintColor: PRI_COLOR,
      inactiveTintColor: '#000404',
      inactiveBackgroundColor: 'transparent',
      activeBackgroundColor: '#f1f1f1',
      labelStyle: {
        fontSize: 14,
        alignSelf: 'center',
        marginLeft: 0
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.65,
  }
);


const InitSwitchNavigator = createSwitchNavigator({
  SplashScreen: SplashScreen,
  HomeDrawer: DrawerNavigator
}, {
    initialRouteName: 'SplashScreen',
  }
);

export default InitSwitchNavigator;
