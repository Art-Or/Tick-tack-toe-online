import avatarSrc1 from "./images/ava1.png";
import avatarSrc2 from "./images/ava2.png";
import avatarSrc3 from "./images/ava3.png";
import avatarSrc4 from "./images/ava4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};
export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];
export const PLAYERS = [
  {
    id: 1,
    name: "Player1",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Player2",
    rating: 850,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Player3",
    rating: 1400,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Player4",
    rating: 760,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];
