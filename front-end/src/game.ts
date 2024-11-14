interface GameState {
  cells: Cell[];
  currentPlayer: string;
  winner: string;
  draw: boolean
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }