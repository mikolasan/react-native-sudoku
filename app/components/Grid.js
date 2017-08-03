'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  CellSize,
  BorderWidth,
} from './GlobalStyle';

import Cell from './Cell';
import { sudoku } from '../utils';

const sudokuFactor = sudoku.factor;
const sudokuSide = sudoku.side;

var _ = require('lodash');
const stack = _.range(1, sudokuSide + 1);

class Grid extends Component {
  cells = []

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
          return (
            <View key={'grid' + i} style={styles.grid} >
            {
              stack.map((item, j) => {
                const x = i % sudokuFactor * sudokuFactor + j % sudokuFactor;
                const y = Math.floor(i / sudokuFactor) * sudokuFactor + Math.floor(j / sudokuFactor);
                const index = x + y * sudokuSide;
                return <Cell ref={ref => this.cells[index] = ref} key={'cell' + index} 
                  index={index} number={null} onPress={this.props.onPress} />
              })
            }
            </View>
          )
        })
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: CellSize * sudokuSide + BorderWidth * 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'orange',
  },
  grid: {
    margin: BorderWidth,
    width: CellSize * sudokuFactor,
    height: CellSize * sudokuFactor,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});


export default Grid;
