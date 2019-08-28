import { createStackNavigator } from 'react-navigation'
import ProfileScreen from '../components/ProfileScreen'

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#980000',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: 'white'
      },
    }
  }
)

export default ProfileStack