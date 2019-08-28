import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Image, Dimensions, Button } from 'react-native'
import { Text } from 'galio-framework'

import Workout from '../../assets/workout.jpg'

export default class RoutineScreen extends Component {
  static navigationOptions = {
    title: 'Upper Body Focus',
    headerBackTitle: null,
  }

  state = {
    selected: null,
    workoutName: 'Upper Body Focus',
    workoutExercises: [
      {
        'recordID': '0',
        'name': 'Crunches',
        'number': '1',
        'reps': ['2 sets of 50', '2 sets of 25', '2 sets to failure'],
      },
      {
        'recordID': '1',
        'name': 'Hanging Leg Raises',
        'number': '2',
        'reps': ['1 set of 15', '1 set of 10', '2 sets to failure'],
      },
      {
        'recordID': '2',
        'name': 'Oblique Twists',
        'number': '3',
        'reps': ['2 sets of 50 each side', '2 sets to failure each side'],
      },
    ],
    error: null,
  }

  viewComments() {
    console.warn('View Comments')
  }

  renderExerciseList(exercise) {
    console.warn('CALLED')
    const {selected} = this.state
    console.warn('SELECTED: ', selected)
    const repsDetail = exercise.reps

    return selected && repsDetail.map((item, index) => (
      <View key={index}>
        <Text style={styles.listItemText}>
          {item}
        </Text>
      </View>
    ))
  }

  _onPressItem = (exercise) => {
    const id = exercise.recordID
    if (this.state.selected === id) {
      this.setState({selected: null})
    } else {
      this.setState({selected: id})
    }
  }

  renderExercise(exercise) {
    // const {exercise, index} = this.props

    return (
      <TouchableOpacity onPress={() => this._onPress(exercise.id)} style={styles.listItemWrapper}>
        <View style={styles.listRowWrapper}>
          <Text>
              {exercise.number}
          </Text>
          <View style={styles.listPreviewWrapper}>
            <Text style={styles.listItemHeader}>
              {exercise.name}
            </Text>
            <View>
              {this.renderExerciseList(exercise)}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderRoutine() {
    const exercises = this.state.workoutExercises
    
    return exercises.map(
      (exercise, index) => (
        <TouchableOpacity onPress={() => this._onPressItem(exercise)} style={styles.listItemWrapper}>
          <View style={styles.listRowWrapper}>
            <Text>
              {exercise.number}
            </Text>
            <View style={styles.listPreviewWrapper}>
              <Text style={styles.listItemHeader}>
                {exercise.name}
              </Text>
              <View>
                {this.renderExerciseList(exercise)}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    )


    /*
    for (var i = 0 ; i < exercises.length ; i++) {
      return this.renderExercise(exercises[i])
    }
    */
  }
//        <WorkoutRoutine data={this.state.workoutExercises} />
  render() {
    return (
      <View style={{flex: 1}}>
        <Image source={Workout} style={{width: Dimensions.get('window').width, height: 250}}/>
        <Text style={{paddingTop: 20, paddingBottom: 10, textAlign: 'center', fontSize: 20, fontWeight: '600'}}>Exercises</Text>
        {this.renderRoutine()}
        <View style={{paddingTop: 8}}>
          <Button title="View Comments" onPress={this.viewComments} style={{fontSize: 12}} />
        </View>
      </View>
    )
  }
}

class WorkoutRoutineItem extends React.PureComponent {
  // handler for expanding a contact in the list
  _onPress = () => {
    const {onPressItem, id} = this.props

    onPressItem(id)
  }

  // render selectable list of emails or phone numbers from an array
  // when contact is expanded
  // key = sms or email
  renderList(exercise) {
    const {selected} = this.props
    const repsDetail = exercise.reps

    return selected && repsDetail.map((item, index) => (
      <View key={index}>
        <Text style={styles.listItemText}>
          {item}
        </Text>
      </View>
    ))
  }

  render() {
    const {exercise, index} = this.props

    return (
      <TouchableOpacity onPress={this._onPress} style={styles.listItemWrapper}>
        <View style={styles.listRowWrapper}>
          <Text>
              {exercise.number}
          </Text>
          <View style={styles.listPreviewWrapper}>
            <Text style={styles.listItemHeader}>
              {exercise.name}
            </Text>
            <View>
              {this.renderList(exercise)}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

WorkoutRoutineItem.propTypes = {
  id: PropTypes.string,
  exercise: PropTypes.object,
  selected: PropTypes.bool,
  onPressItem: PropTypes.func,
}

class WorkoutRoutine extends React.PureComponent {
  state = {
    selected: null,
  }

  // FlatList required prop
  _keyExtractor = (exercise) => exercise.recordID

  // handler to set which contact is expanded
  _onPressItem = (id) => {
    if (this.state.selected === id) {
      this.setState({selected: null})
    } else {
      this.setState({selected: id})
    }
  }

  // FlatList required prop
  _renderItem = ({item, index}) => {
    const id = item.recordID

    if (index === 0) {
      return <Image source={Workout} style={{width: Dimensions.get('window').width, height: 250}}/>
    } else if (index === 1) {
      return <Text style={{paddingTop: 20, paddingBottom: 10, textAlign: 'center', fontSize: 20, fontWeight: '600'}}>Exercises</Text>
    } else {
      return (
        <WorkoutRoutineItem
          id={id}
          index={index}
          exercise={item}
          onPressItem={this._onPressItem}
          // onSelectRecipient={this.props.onSelectRecipient}
          selected={this.state.selected === id}
        />
      )
    }
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        // need to explicitly pass state to FlatList
        // so it will re-render
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        contentInset={{bottom: 70}}
      />
    )
  }
}

WorkoutRoutine.propTypes = {
  onSelectRecipient: PropTypes.func,
  data: PropTypes.array,
}

const styles = StyleSheet.create({
  listItemWrapper: {
    borderBottomColor: 'rgba(84, 88, 90, 0.2)',
    borderBottomWidth: 1,
    width: '100%',
    padding: 14,
    justifyContent: 'center',
  },
  listRowWrapper: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  listPreviewWrapper: {
    flexDirection: 'column',
  },
  listItemHeader: {
    color: '#54585A',
    // fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    paddingLeft: 12,
  },
  listItemText: {
    color: '#54585A',
    // fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    paddingTop: 10,
    paddingLeft: 12,
  },
})