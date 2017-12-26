'use strict';

import React, { Component } from 'react';

import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Size,
  CellSize,
  BoardWidth,
  BorderWidth,
} from './GlobalStyle';
import Touchable from './Touchable';
import { sudoku } from '../utils';

const sudokuFactor = sudoku.factor;
const sudokuSide = sudoku.side;

const spring = {
  duration: 300,
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.6,
  },
  delete: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
};

const Offset = BorderWidth;

class StackCell extends Component {
  left = BoardWidth / sudokuSide * this.props.number + (BoardWidth / sudokuSide - CellSize) / 2;
  top = this.props.index
  state = {
    hide: false,
    left: this.left,
    top: this.top,
  }

  moveTo(index, onMoveFinish) {
    const x = index % sudokuSide;
    const y = (index - x) / sudokuSide;
    const gap = 2 * BorderWidth;
    const left = CellSize * x + gap * Math.floor(x / sudokuFactor) + Offset;
    // margin = 20
    const top = -20 - CellSize * (sudokuSide - y) - gap * Math.floor((sudokuSide - 1 - y) / sudokuFactor) - Offset;
    LayoutAnimation.configureNext(spring);
    this.setState({ left, top });
    setTimeout(() => {
      onMoveFinish && onMoveFinish();
    }, 300);
  }

  setHide(hide, onFinish) {
    this.setState({ hide }, onFinish);
  }

  moveBack(onMoveFinish) {
    LayoutAnimation.configureNext(spring);
    this.setState({
      left: this.left,
      top: this.top,
    });
    setTimeout(() => {
      onMoveFinish && onMoveFinish();
    }, 300);
  }

  reset() {
    this.setState({
      hide: false,
      left: this.left,
      top: this.top,
    });
  }

  onPress = (e) => {
    this.props.onPress && this.props.onPress(this.props.number);
  }

  render() {
    if (this.state.hide) return null;
    const { number } = this.props;
    const { left, top } = this.state;
    return (
      <Touchable onPress={this.onPress} style={[styles.container, {top, left}]} >
        <View style={styles.cell} >
          <Text style={styles.text}>{number + 1}</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: CellSize,
    height: CellSize,
  },
  cell: {
    width: CellSize,
    height: CellSize,
    backgroundColor: 'moccasin',
    borderColor: 'orange',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: BorderWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#666',
    fontSize: CellSize * 2 / 3,
  }
});


export default StackCell;
