import {Container} from 'unstated'
import {tracks} from '../constants/tracks'

export class AppContainer extends Container {
  state = {
    username: 'BOPPA',
    tracks: tracks,
  }

  constructor() {
    super()
  }

  changeUsername = async(name) => {
    await this.setState({username: name})
  }

  setTracks = async() => {
    console.warn('Container tracks: ', tracks)
    await this.setState({tracks: tracks})
  }
}

export const store = new AppContainer()