import { useReducer } from "react";
import { getNextMove } from "./get-next-move";
import { computeWinner } from "./compute-winner";
import { gameStateReducer, initGameState } from "./game-state-reducer";

// export const GAME_STATE_ACTIONS = {
//   CELL_CLICK: "cell click",
// };

// const gameStateReducer = (state, action) => {
//   switch (action.type) {
//     case GAME_STATE_ACTIONS.CELL_CLICK: {
//       const { index } = action;

//       if (state.cells[index]) {
//         return state;
//       }

//       return {
//         ...state,
//         currentMove: getNextMove(
//           state.currentMove,
//           state.playersCount,
//           state.playersTimeOver
//         ),
//         cells: state.cells.map((cell, i) =>
//           i === index ? state.currentMove : cell
//         ),
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// const initGameState = ({ playersCount }) => ({
//   cells: new Array(19 * 19).fill(null),
//   currentMove: GAME_SYMBOLS.CROSS,
//   playersCount,
//   // playersTimeOver: [],
// });

export function useGameState(playersCount) {
  // const winnerSymbol =
  //   nextMove === gameState.currentMove
  //     ? gameState.currentMove
  //     : gameState.cells[winnerSequence?.[0]];

  return {
    cells: gameState.cells,
    currentMove: gameState.currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
    dispatch,
  };

  // const handleCellClick = (index) => {
  //   setGameState((lastGameState) => {
  //     if (lastGameState.cells[index]) {
  //       return lastGameState;
  //     }

  //     return {
  //       ...lastGameState,
  //       currentMove: getNextMove(
  //         lastGameState.currentMove,
  //         playersCount,
  //         lastGameState.playersTimeOver
  //       ),
  //       cells: lastGameState.cells.map((cell, i) =>
  //         i === index ? lastGameState.currentMove : cell
  //       ),
  //     };
  //   });
  // };

  // const handlePlayerTimeOver = (symbol) => {
  //   setGameState((lastGameState) => {
  //     return {
  //       ...lastGameState,
  //       playersTimeOver: [...lastGameState.playersTimeOver, symbol],
  //       currentMove: getNextMove(
  //         lastGameState.currentMove,
  //         playersCount,
  //         lastGameState.playersTimeOver
  //       ),
  //     };
  //   });
  // };
}
