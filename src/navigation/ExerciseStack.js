import { createStackNavigator } from 'react-navigation'
import ExerciseScreen from '../components/ExerciseScreen/ExerciseScreen'

const ExerciseStack = createStackNavigator(
  {
    Exercise: ExerciseScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#980000',
      },
      headerTitleStyle: {
        color: 'white'
      }
    }
  }
)

export default ExerciseStack