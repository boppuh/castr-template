import {NavigationActions, StackActions} from 'react-navigation'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

function navigateWithReset(routeName) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName})
      ]
    })
  )
}

function getCurrentNav() {
  console.log('getting current Nav')
  const {nav} = _navigator.state
  const auth = nav.routes[nav.index]
  let {routeName} = auth

  if (auth.routes) {
    routeName = auth.routes[auth.index].routeName
  }

  console.log(routeName)
  return routeName
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  navigateWithReset,
  getCurrentNav,
}