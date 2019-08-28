import SignedIn from './SignedIn'
import { createSwitchNavigator } from 'react-navigation';

const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      }
    },
    {
      initialRouteName: 'SignedIn',
    },
  )
}

export default createRootNavigator