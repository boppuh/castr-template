import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { Text } from 'galio-framework'

import Post from './shared/Post'

export default class ExerciseScreen extends Component {
  static navigationOptions = {
    title: 'Community'
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#cfcfcf'}}>
        <Post />
        <Post />
      </ScrollView>
    )
  }
}