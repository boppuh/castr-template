import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, FlatList, StyleSheet, ScrollView, SectionList } from 'react-native'
import { Text } from 'galio-framework'
import BodyPart from './BodyPart'

export default class ExerciseScreen extends Component {
  static navigationOptions = {
    title: 'Exercises'
  }
  state = {
    exercises: {
      'abs': [
        {
          'id': '0',
          'name': 'Crunches',
          'part': 'abs',
        },
        {
          'id': '1',
          'name': 'Hanging leg raises',
          'part': 'abs'
        },
        {
          'id': '2',
          'name': 'Oblique twists',
          'part': 'abs',
        },
        {
          'id': '3',
          'name': 'Around-the-worlds',
          'part': 'abs',
        },
        {
          'id': '4',
          'name': 'Weight knee tucks',
          'part': 'abs',
        },
        {
          'id': '5',
          'name': 'Windshield wipers',
          'part': 'abs',
        },
        {
          'id': '6',
          'name': 'Rope climbers',
          'part': 'abs',
        },
      ],
      'chest': [
        {
          'id': '7',
          'name': 'Bench Press',
          'part': 'chest',
        },
        {
          'id': '8',
          'name': 'Dumbbell Flyes',
          'part': 'chest',
        },
        {
          'id': '9',
          'name': 'Decline Pushups',
          'part': 'chest',
        },
        {
          'id': '10',
          'name': 'Incline dumbbell press',
          'part': 'chest',
        },
        {
          'id': '11',
          'name': 'Incline bench cable flyes',
          'part': 'chest',
        },
        {
          'id': '12',
          'name': 'Decline bench press',
          'part': 'chest',
        },
        {
          'id': '13',
          'name': 'Dumbbell pullover',
          'part': 'chest'
        },
      ],
      'shoulders': [
        {
          'id': '14',
          'name': 'Front dumbbell raise',
          'part': 'shoulders',
        },
        {
          'id': '15',
          'name': 'Upright row',
          'part': 'shoulders',
        },
        {
          'id': '16',
          'name': 'Arnold press',
          'part': 'shoulders'
        },
        {
          'id': '17',
          'name': 'Barbell overhead press',
          'part': 'shoulders',
        },
        {
          'id': '18',
          'name': 'Standing dumbbell flyes',
          'part': 'shoulders,'
        },
        {
          'id': '19',
          'name': 'Face pull',
          'part': 'shoulders',
        },
        {
          'id': '20',
          'name': 'High pull',
          'part': 'shoulders',
        },
      ],
      'legs': [
        {
          'id': '21',
          'name': 'Reverse lunges',
          'part': 'legs',
        },
        {
          'id': '22',
          'name': 'Front squats',
          'part': 'legs',
        },
        {
          'id': '23',
          'name': 'Leg press',
          'part': 'legs',
        },
        {
          'id': '24',
          'name': 'Box jump',
          'part': 'legs',
        },
        {
          'id': '25',
          'name': 'Leg curls',
          'part': 'legs',
        },
        {
          'id': '26',
          'name': 'Leg extensions',
          'part': 'legs',
        },
        {
          'id': '27',
          'name': 'One-legged dumbbell squats',
          'part': 'legs',
        },
      ],
      'biceps': [
        {
          'id': '28',
          'name': 'E-Z bar curls',
          'part': 'biceps',
        },
        {
          'id': '29',
          'name': 'Dumbbell curls',
          'part': 'biceps',
        },
        {
          'id': '30',
          'name': 'Standing cable curls',
          'part': 'biceps'
        },
        {
          'id': '31',
          'name': 'Incline dumbbell curls',
          'part': 'biceps',
        },
        {
          'id': '32',
          'name': 'Concentration curls',
          'part': 'biceps',
        },
        {
          'id': '33',
          'name': 'Standing barbell curls',
          'part': 'biceps',
        },
        {
          'id': '34',
          'name': 'Hammer curls',
          'part': 'biceps',
        }
      ],
      'triceps': [
        {
          'id': '35',
          'name': 'Cable pushdowns',
          'part': 'triceps',
        },
        {
          'id': '36',
          'name': 'Skullcrushers',
          'part': 'triceps',
        },
        {
          'id': '37',
          'name': 'Overhead dumbbell extensions',
          'part': 'triceps',
        },
        {
          'id': '38',
          'name': 'Close-grip bench press',
          'part': 'triceps',
        },
        {
          'id': '39',
          'name': 'Dips',
          'part': 'triceps',
        },
        {
          'id': '40',
          'name': 'One-arm kettlebell floor press',
          'part': 'triceps',
        },
        {
          'id': '41',
          'name': 'Diamond pushup',
          'part': 'triceps',
        },
      ],
      'cardio': [
        {
          'id': '42',
          'name': 'Inchworm',
          'part': 'cardio',
        },
        {
          'id': '43',
          'name': 'Jump rope',
          'part': 'cardio',
        },
        {
          'id': '44',
          'name': 'Mountain climbers',
          'part': 'cardio',
        },
        {
          'id': '45',
          'name': 'Power skip',
          'part': 'cardio',
        },
        {
          'id': '46',
          'name': 'Uppercut',
          'part': 'cardio',
        },
        {
          'id': '47',
          'name': 'Mountain climber twist',
          'part': 'cardio'
        },
        {
          'id': '48',
          'name': 'High kness',
          'part': 'cardio'
        },
      ]
    },
    error: null,
  }

  scrollToSection = (type) => {
    let index
    console.warn(type.toLowerCase())
    switch (type.toLowerCase()) {
      case 'abs': index = 0; break
      case 'chest': index = 1; break
      case 'shoulders': index = 2; break
      case 'legs': index = 3; break
      case 'biceps': index = 4; break
      case 'triceps': index = 5; break
      case 'cardio': index = 6; break
    }

    console.warn('INDEX: ', index)

    this.exerciseList._scrollToSection({
      sectionIndex: index,
      itemIndex: 0,
    })
  }

  // <ExerciseList data={this.state.exercises}/>

  render() {
    return (
      <View style={{}}>
        <ScrollView style={{flexDirection: 'row', height: 100, marginVertical: 12}} horizontal>
          <BodyPart type='Abs' scrollTo={this.scrollToSection} />
          <BodyPart type='Chest' scrollTo={this.scrollToSection} />
          <BodyPart type='Shoulders' scrollTo={this.scrollToSection} />
          <BodyPart type='Legs' scrollTo={this.scrollToSection} />
          <BodyPart type='Biceps' scrollTo={this.scrollToSection} />
          <BodyPart type='Triceps' scrollTo={this.scrollToSection} />
          <BodyPart type='Cardio' scrollTo={this.scrollToSection}/>
        </ScrollView>
        <ExerciseSectionList exercises={this.state.exercises} onRef={ref => {this.exerciseList = ref}}/>
      </View>
    )
  }
}

class ExerciseListItem extends React.PureComponent {
  // handler for expanding a contact in the list
  _onPress = () => {
    const {onPressItem, exercise} = this.props

    onPressItem(exercise)
  }

  render() {
    const {exercise, index, section} = this.props

    // console.warn('Exericise: ', exercise, index, section)

    const listItemStyle = index === 0 ? styles.listFirstItemWrapper : styles.listItemWrapper

    return (
      <TouchableOpacity onPress={this._onPress} style={listItemStyle}>
        <View style={styles.listRowWrapper}>
          <View style={{width: 40, height: 40, borderRadius: 4, backgroundColor: 'gray'}}>

          </View>
          <Text size={16} style={{paddingLeft: 8}}>
            {exercise.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

ExerciseListItem.propTypes = {
  id: PropTypes.string,
  exercise: PropTypes.object,
  onPressItem: PropTypes.func,
}

class ExerciseList extends React.PureComponent {
  _keyExtractor = (exercise) => exercise.id

  _onPressItem = (exercise) => {
    const name = exercise.name
  }

  _renderItem = ({item}) => {
    const id = item.id

    return (
      <ExerciseListItem
        id={id}
        exercise={item}
        onPressItem={this._onPressItem}
      />
    )
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
        contentInset={{bottom: 120}}
      />
    )
  }
}

ExerciseList.propTypes = {
  onSelectRecipient: PropTypes.func,
  data: PropTypes.array,
}

class ExerciseSectionList extends PureComponent {
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  _keyExtractor = (item, index) => item.id

  _onPressItem = (exercise) => {
    const name = exercise.name
  }

  _renderItem = ({item, index, section}) => {
    const id = item.id

    return (
      <ExerciseListItem
        id={id}
        index={index}
        section={section.index}
        exercise={item}
        onPressItem={this._onPressItem}
      />
    )
  }

  _renderSectionHeader = ({section}) => {

    console.warn('Section: ', section.index)
    return (
      <View style={{backgroundColor: 'white', padding: 12}}>
        <Text bold size={16} >{section.title}</Text>
      </View>
    )
  }

  _scrollToSection = (index) => {
    this.exerciseList.scrollToLocation(index)
  }

  render() {
    const sections = [
        {title: 'Abs', data: this.props.exercises['abs']},
        {title: 'Chest', data: this.props.exercises['chest']},
        {title: 'Shoulders', data: this.props.exercises['shoulders']},
        {title: 'Legs', data: this.props.exercises['legs']},
        {title: 'Biceps', data: this.props.exercises['biceps']},
        {title: 'Triceps', data: this.props.exercises['triceps']},
        {title: 'Cardio', data: this.props.exercises['cardio']},
    ]

    return (
      <SectionList
        ref={(sectionList) => {this.exerciseList = sectionList}}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        sections={sections}
        keyExtractor={this._keyExtractor}
        contentInset={{bottom: 120}}
        scrollToLocation={this._scrollToSection}
      />
    )
  }
}

const styles = StyleSheet.create({
  listItemWrapper: {
    borderTopColor: 'rgba(84, 88, 90, 0.2)',
    borderTopWidth: 1,
    width: '100%',
    padding: 14,
    justifyContent: 'center',
  },
  listFirstItemWrapper: {
    width: '100%',
    padding: 14,
    justifyContent: 'center',
  },
  listRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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