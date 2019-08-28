import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import {Subscribe} from 'unstated'
import Icon from 'react-native-vector-icons/FontAwesome'
import Post from './shared/Post'

import {AppContainer} from '../state/AppContainer'

class ProfileScreen extends Component {
  render() {

    const str = 'This warning represents an extremely serious project misconfiguration and will likely cause some shell scripts in your project to be skipped entirely.'

    return (
      <ScrollView>
        <View style={{height: 272, backgroundColor: '#980000', alignItems: 'center', marginBottom: 12}}>
          <View style={{width: 100, height: 100, borderRadius: 100/2, backgroundColor: 'white', marginTop: 12}} />
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold', paddingTop: 12}}>jphit</Text>
          <Text style={{fontSize: 14, color: 'white', paddingTop: 12, marginHorizontal: 24, flex: 1, flexWrap: 'wrap'}}>{str}</Text>
          <View style={{paddingBottom: 12}}>
            <Icon.Button
              name='user'
              backgroundColor='white'
              color='black'
              size={15}
              style={{paddingBottom: 12, borderColor: 'black', borderWidth: 1}}
            >
              <Text style={{color: 'black'}}>
                Follow
              </Text>
            </Icon.Button>
          </View>
        </View>
        <Post />
        <Post />
      </ScrollView>
    )
  }
}

/*
class ProfileScreen extends Component {

  componentDidMount() {
    const {tracks} = this.props

    console.warn('Tracks: ', tracks)
  }

  _renderStoreButtons() {
    return (
      <View style={{marginTop: 12, width: '100%'}}>
        <TouchableOpacity style={{backgroundColor: 'white', justifyContent: 'center', borderBottomColor: 'rgba(240, 240, 240, 1.0)', borderBottomWidth: 0.5}}>
          <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
            <Icon name='shopping-cart' size={20} color='gray' />
            <Text style={{paddingLeft: 16}}>
              Cart
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white', justifyContent: 'center', borderBottomColor: 'rgba(240, 240, 240, 1.0)', borderBottomWidth: 0.5}}>
          <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
            <Icon name='bookmark' size={20} color='gray' />
            <Text style={{paddingLeft: 16}}>
              Saved for later
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white', justifyContent: 'center', borderBottomColor: 'rgba(240, 240, 240, 1.0)', borderBottomWidth: 0.5}}>
          <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
            <Icon name='shopping-bag' size={20} color='gray' />
            <Text style={{paddingLeft: 16}}>
              Purchased
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white', justifyContent: 'center', borderBottomColor: 'rgba(240, 240, 240, 1.0)', borderBottomWidth: 0.5}}>
          <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
            <Icon name='industry' size={20} color='gray' />
            <Text style={{paddingLeft: 16}}>
              For sale
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  _renderManageLibrary() {
    return (
      <View style={{flex: 1, marginTop: 12, width: '100%', backgroundColor: 'white'}}>
        <View style={{borderBottomColor: 'rgba(240, 240, 240, 1.0)', borderBottomWidth: 0.5}}>
          <Text style={{margin: 16, fontSize: 16, color: 'rgba(180, 180, 180, 1.0)'}}>
            Your collection
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

        </View>
      </View>
    )
  }

  render() {
    const {username} = this.props

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'rgba(240, 240, 240, 1.0)', borderTopColor: 'gray', borderTopWidth: 0.5}}>
          {this._renderStoreButtons()}
          {this._renderManageLibrary()}
          {this._renderManageLibrary()}
        </View>
      </SafeAreaView>
    )
  }
}
*/

export default class ProfileScreenSubscriber extends Component {
  render() {
    return (
      <Subscribe to={[AppContainer]} >
        {({state: {username, tracks}})  => {
          const childProps = {username, tracks}

          return <ProfileScreen {...childProps} />
        }}
      </Subscribe>
    )
  }
}