'use strict';

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { sudoku } from '../utils';

export const Size = Dimensions.get('window');

export const BorderWidth = 5;
//export const ButtonSize =  Math.floor(BoardWidth / (sudoku.side + 1));
var AllBorders = BorderWidth * sudoku.factor * 2;

export const BoardMargin = BorderWidth * 2;
export const CellSize = Math.floor((Size.width - AllBorders - BoardMargin) / sudoku.side);

export const BoardWidth = CellSize * sudoku.side + AllBorders;
//export const CellSizeReplacement = 200;

export const BlockSize = 10;

export const Color = {

};
