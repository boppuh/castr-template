import React from 'react'
import PropTypes from 'prop-types'
import Svg, {Path} from 'react-native-svg'
import {View} from 'react-native'
import {SpotXIcons} from '../../assets/svg/IconData'

export default class SpotXIcon extends React.Component {
  render() {
    const {i, fill, size, styles, stroke, strokeWidth} = this.props
    const data = SpotXIcons[i]
    const getFill = (path) => {
      if (fill) {
        return fill
      }

      return path.fill || '#fff'
    }
    const getStroke = (path) => {
      if (stroke) {
        return stroke
      }

      return path.stroke || 'none'
    }
    const getStrokeWidth = (path) => {
      if (strokeWidth) {
        return strokeWidth
      }

      return path.strokeWidth || 1
    }

    return (
      <View style={styles}>
        <Svg height={size} width={size} viewBox={data.viewBox}>
          {data.paths.map((path, index) => {
            return (
              <Path
                key={index}
                fillOpacity={path.fillOpacity || '1.0'}
                fill={getFill(path)}
                d={path.d}
                stroke={getStroke(path)}
                getStrokeWidth={getStrokeWidth(path)}
              />
            )
          })}
        </Svg>
      </View>
    )
  }
}

SpotXIcon.propTypes = {
  i: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  styles: PropTypes.object,
}
