import React, { Component } from 'react';
import './App.css';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      songs: [
        {
          title: 'hello',
          length: '1:00'
        },
        {
          title: 'goodbye',
          length: '2:00'
        },
        {
          title: 'see ya',
          length: '3:00'
        },
        {
          title:'dude',
          length: '4:00'
        }
      ],
      currentSong: {
        title: '',
        length: ''
      }
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick(song) {
   this.setState((currentState) => {
    return {
      currentSong: {...currentState.currentSong, ...song}
    }
   })
  }
  render() {
    return (
      <div>
        <SongList 
          handleButtonClick={this.handleButtonClick}
          songs={this.state.songs}/>
        <SongDetail currentSong={this.state.currentSong}/>
      </div>
    );
  }
}

export default App;
