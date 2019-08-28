import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Post extends React.Component {
  render() {

    const str = 'This warning represents an extremely serious project misconfiguration and will likely cause some shell scripts in your project to be skipped entirely, leading to other build failures or missing files in the build directory.'
    // const {i, fill, size, styles, stroke, strokeWidth} = this.props

    return (
      <View style={{marginBottom: 12, zIndex: 999, shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.3, shadowColor: 'black'}}>
        <View style={{backgroundColor: 'white', height: 80, flexDirection: 'row', alignItems: 'center'}} >
          <View style={{backgroundColor: 'gray', width: 60, height: 60, borderRadius: 60/2, marginLeft: 12}} />
          <Text style={{paddingLeft: 12, fontSize: 18}}>jphit</Text>
          <Text style={{marginLeft: 'auto', marginRight: 12, fontSize: 16}}>20m</Text>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <Image source={require('../../../assets/workout.jpg')} resizeMode='cover' style={{height: 250, width: '100%'}} />
          <Text style={{marginHorizontal: 12, marginTop: 12, flex: 1, flexWrap: 'wrap'}}>{str}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12, marginLeft: 12}}>
            <View style={{width: 20}}>
              <Icon name='thumbs-o-up' size={20} />
            </View>
            <Text style={{paddingLeft: 12}}>20 Likes</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 12, marginLeft: 12}}>
            <View style={{width: 20}}>
              <Icon name='comment-o' size={20} />
            </View>
            <Text style={{paddingLeft: 12}}>20 Comments</Text>
          </View>
        </View>
      </View>
    )
  }
}

Post.propTypes = {

}
