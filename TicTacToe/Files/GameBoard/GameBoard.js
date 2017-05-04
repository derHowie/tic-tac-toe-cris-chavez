import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Styles from './Styles';

const Oponents = {
  Computer: 'O',
  Human: 'X',
}

export default class GameBoard extends React.Component {
  state = {
    turnOf: Oponents.Human,

    winnerExists: false,
  }

  userMadeSelection = (event) => {

    this.checkIfWon()
  }

  checkIfWon = () => {

  }

  makeRowOfBoxes = (row) => {
    let rowOfBoxes = [];

    for (var i = 0; i < 3; i++) {
      let button = <TouchableOpacity
      key={i}
      onPress={(event) => this.userMadeSelection(event)}
      >
        <View style={[Styles.square]}>
        
        </View>
      </TouchableOpacity>
      rowOfBoxes.push(button)
    }

    return rowOfBoxes;
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.board}>
          <View style={Styles.row}>
          {this.makeRowOfBoxes('firstRow')}
          </View>
          <View style={Styles.row}>
            {this.makeRowOfBoxes('secondRow')}
          </View>
          <View style={Styles.row}>
            {this.makeRowOfBoxes('thirdRow')}
          </View>
        </View>
      </View>
    );
  }
}
