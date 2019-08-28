import React, {ReactElement} from 'react'
import { 
  createBottomTabNavigator, 
} from 'react-navigation'
import {
  BottomNavigation,
  BottomNavigationTab,
  BottomNavigationProps,
} from 'react-native-ui-kitten'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../components/HomeScreen'
import HomeStack from './HomeStack'
import ProfileScreen from '../components/ProfileScreen'
import RoutineScreen from '../components/RoutineScreen'
import CommunityScreen from './CommunityStack'
import ExerciseStack from './ExerciseStack'
import ProfileStack from './ProfileStack'
import VideoScreen from '../components/VideoScreen';

import {gray, white, appFontBold} from '../styles/vars'

/*
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Video: VideoScreen,
})
*/

const SignedIn = createBottomTabNavigator(
  {
    Home: HomeStack,
    // Guide: GuideScreen,
    // Trending: TrendingScreen,
    Exercises: ExerciseStack,
    Community: CommunityScreen,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state
        let IconComponent = Ionicons
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
          // IconComponent = HomeIconWithBadge
        } else if (routeName === 'Exercises') {
          iconName = `ios-trending-up`
        } else if (routeName === 'Community') {
          iconName = `ios-albums`
        } else if (routeName === 'Profile') {
          iconName = `ios-contact`
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
      headerStyle: {
        backgroundColor: '#980000'
      } 
    }),
  }
)

export default SignedIn