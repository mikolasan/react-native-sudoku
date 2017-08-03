'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import StackCell from './StackCell';
import { sudoku } from '../utils';

const sudokuSide = sudoku.side;

var _ = require('lodash');
const stack = _.range(sudokuSide);

class Stack extends Component {
  stacks = stack.map(x => new Array(sudokuSide))

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState != this.state) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={styles.container} >
      {
        stack.map((item, i) => {
          return stack.map((item, j) => {
            return (
              <StackCell ref={ref => this.stacks[j][i] = ref} key={i+'-'+j} 
                index={i} number={item} onPress={this.props.onPress} />
            )
          })
        })
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});


export default Stack;
