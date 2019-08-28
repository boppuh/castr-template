import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../components/HomeScreen';
// import VideoScreen from '../components/VideoScreen';
import RoutineScreen from '../components/RoutineScreen'


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    // Video: VideoScreen,
    Routine: RoutineScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#980000',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerBackTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white'
    }
  }
)

export default HomeStack