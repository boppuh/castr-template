import React, {Component} from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'galio-framework'

export default class BodyPart extends Component {
  render() {
    const {type} = this.props

    return (
      <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}} onPress={() => this.props.scrollTo(type)}>
        <View style={{height: 60, width: 60, borderRadius: 60/2, backgroundColor: 'gray'}} />
        <Text style={{paddingTop: 8}}>{type}</Text>
      </TouchableOpacity>
    )
  }
}