import React, { Component } from 'react'
import { View, Button, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { Block, Text } from 'galio-framework'
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import {Subscribe} from 'unstated'

import {AppContainer} from '../state/AppContainer'

const { width, height } = Dimensions.get('screen')

class HomeScreen extends Component {
  state = {
    data: [
      {
        id: 'w1',
        name: 'Polar',
      },
      {
        id: 'w2',
        name: 'Pop',
      },
      {
        id: 'w3',
        name: 'Tiger',
      },
      {
        id: 'w4',
        name: 'Droppings',
      },
    ]
  }

  navigateToRoutine = () => {
    // console.log('ID: ', id)
    this.props.navigation.navigate('Routine')
  }

  /*
  render() {
    return (
      <ScrollView>
        <Block style={styles.container} >
          <Text color='black' center bold size={18} style={{paddingTop: 12}}>
            Featured Workout
          </Text>
          <TouchableOpacity onPress={this.navigateToRoutine}>
            <ImageBackground source={require('../../assets/workout.jpg')} style={{height: 200, margin: 12, backgroundColor: 'white'}}>
              <Text color='white' bold style={{margin: 12}}>
                Back, Biceps, Core Plus
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <Text color='black' center bold size={18} style={{paddingTop: 12}}>
            Past Workouts
          </Text>
          <WorkoutList data={this.state.data} />
        </Block>
      </ScrollView>
    )
  }
  */

  render() {
    return (
      <Block style={styles.container} >
        <WorkoutList data={this.state.data} onSelect={this.navigateToRoutine} />
      </Block>
    )
  }
}

/*
<Block style={{height: 200, margin: 12, backgroundColor: 'white'}} >
  replaced by ImageBackground
</Block>
*/

class WorkoutItem extends Component {
  _onPress = () => {
    this.props.onPressItem(this.props.id)
  }

  render() {
    const {index, name} = this.props

    if (index === 0) {
      return (
        <View>
          <Text color='black' center bold size={18} style={{paddingTop: 12}}>
              Featured Workout
          </Text>
          <TouchableOpacity onPress={this._onPress} style={{shadowColor: 'black', shadowOpacity: 0.3, shadowOffset: {width: 0, height: 3}}}>
            <ImageBackground source={require('../../assets/workout.jpg')} style={{height: 200, margin: 12, backgroundColor: 'white'}}>
            <View style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}/>
              <Text color='white' bold style={{margin: 12}}>
                {name}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )
    } else if (index === 1) {
      return (
        <View>
          <Text color='black' center bold size={18} style={{paddingTop: 12}}>
            Past Workouts
          </Text>
          <TouchableOpacity onPress={this._onPress} style={{shadowColor: 'black', shadowOpacity: 0.3, shadowOffset: {width: 0, height: 3}}}>
            <ImageBackground source={require('../../assets/workout.jpg')} style={{height: 200, margin: 12, backgroundColor: 'white'}}>
            <View style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}/>
              <Text color='white' bold style={{margin: 12}}>
                {name}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <TouchableOpacity onPress={this._onPress} style={{shadowColor: 'black', shadowOpacity: 0.3, shadowOffset: {width: 0, height: 3}}}>
          <ImageBackground source={require('../../assets/workout.jpg')} style={{height: 200, margin: 12, backgroundColor: 'white'}}>
            <View style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}/>
            <Text color='white' bold style={{margin: 12}}>
              {name}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      )
    }
  }
}

class WorkoutList extends Component {

  _keyExtractor = (item, index) => item.id

  _onPressItem = (id) => {
    this.props.onSelect(id)
  }

  _renderItem = ({item, index}) => (
    <WorkoutItem
      id={item.id}
      name={item.name}
      index={index}
      onPressItem={this._onPressItem}
    />
  )

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        contentInset={{bottom: 180}}
      />
    )
  }
}

export default class HomeScreenSubscriber extends Component {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: null,
  }
  render() {
    const {navigation} = this.props
    return (
      <Subscribe to={[AppContainer]} >
        {({state: {username, tracks}})  => {
          const childProps = {username, tracks, navigation}

          return <HomeScreen {...childProps} />
        }}
      </Subscribe>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width,
    height,
  },
  trackContainer: {
    backgroundColor: 'gray',
    width: width / 3 - 12,
    height: width / 3 - 24,
    marginLeft: 8,
  },
  soundKitScrollContainer: {
    
  }
})

/*
<Block style={styles.container}>
        <Button
          title='Go to Video'
          onPress={() => this.props.navigation.navigate('Video')}
        />
        <Block style={{paddingVertical: 12}}> 
          <Block center>
            <Text color='white' h5>
              Home!!
            </Text>
          </Block>
          <ScrollView horizontal style={{paddingVertical: 8}}>
            <Block flex left row>
              <Block left style={styles.trackContainer} >

              </Block>
              <Block left style={styles.trackContainer} >

              </Block>
              <Block left style={styles.trackContainer} >

              </Block>
            </Block>
          </ScrollView>
        </Block>
        <Block style={{paddingVertical: 12}}>
          <Block center>
            <Text color='white' h5>
              Sound Kits
            </Text>
          </Block>
          <ScrollView horizontal style={{paddingVertical: 8}}>
            <Block flex left row>
              <Block left style={styles.trackContainer} >

              </Block>
              <Block left style={styles.trackContainer} >

              </Block>
              <Block left style={styles.trackContainer} >

              </Block>
            </Block>
          </ScrollView>
        </Block>
      </Block>
*/