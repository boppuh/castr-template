import { createStackNavigator } from 'react-navigation'
import CommunityScreen from '../components/CommunityScreen'

const CommunityStack = createStackNavigator(
  {
    Community: CommunityScreen
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

export default CommunityStack