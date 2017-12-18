'use strict';

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { sudoku } from '../utils';

export const Size = Dimensions.get('window');

export const BoardWidth = Size.width;

export const CellSize = Math.floor(BoardWidth / (sudoku.size + 1));

export const BorderWidth = 3;

export const BlockSize = 15;

export const Color = {

};
