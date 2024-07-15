import { useEffect, useState } from "react";
import Tile, { TileData } from "./tile";

export default function Board() {
  const handleClick = (row: number, col: number) => {
    const newBoard = [...tiles];
    if (newBoard[row][col].isFilled) {
      alert("You can't fill the same tile twice!");
    } else {
      newBoard[row][col] = {
        ...newBoard[row][col],
        value: turnX ? "X" : "O", // toggle turn
        isFilled: true,
      };
      turnX
        ? setPlayerxSpot((prev) => [...prev, `${row}${col}`])
        : setPlayeroSpot((prev) => [...prev, `${row}${col}`]); // add to player spot
      console.log(playeroSpot, playerxSpot);
      setTiles(newBoard);
      setTurnX(!turnX);
    }
  };

  const checkWin = () => {
    for (let index = 0; index < winningPatterns.length; index++) {
      if (winningPatterns[index].every((x) => playerxSpot.includes(x))) {
        alert("Player X wins!");
        reset();
        break;
      } else if (winningPatterns[index].every((x) => playeroSpot.includes(x))) {
        alert("Player O wins!");
        reset();
        break;
      } else if (
        index == 7 &&
        playerxSpot.length == 5 &&
        winningPatterns[index].every((x) => playerxSpot.includes(x)) == false
      ) {
        alert("It's a tie");
        reset();
        break;
      }
    }
  };
  const [playerxSpot, setPlayerxSpot] = useState<string[]>([]);
  const [playeroSpot, setPlayeroSpot] = useState<string[]>([]);

  const defaultState: TileData[][] = [
    [
      { index: 1, value: "", isFilled: false, onClick: () => {} },
      { index: 2, value: "", isFilled: false, onClick: () => {} },
      { index: 3, value: "", isFilled: false, onClick: () => {} },
    ],
    [
      { index: 1, value: "", isFilled: false, onClick: () => {} },
      { index: 2, value: "", isFilled: false, onClick: () => {} },
      { index: 3, value: "", isFilled: false, onClick: () => {} },
    ],
    [
      { index: 1, value: "", isFilled: false, onClick: () => {} },
      { index: 2, value: "", isFilled: false, onClick: () => {} },
      { index: 3, value: "", isFilled: false, onClick: () => {} },
    ],
  ];
  const [tiles, setTiles] = useState<TileData[][]>(defaultState);

  const [turnX, setTurnX] = useState(true);
  const winningPatterns = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["02", "11", "20"],
    ["00", "11", "22"],
  ];

  function reset() {
    setTiles(defaultState);
    setPlayerxSpot([]);
    setPlayeroSpot([]);
    setTurnX(true);
  }
  useEffect(() => {
    setTimeout(() => {
      checkWin();
    }, 300);
  }, [playeroSpot, playerxSpot]);
  return (
    <div className="flex flex-col gap-6 w-full items-center">
      <div className="p-4 bg-teal-500 rounded-2xl grid grid-cols-3 gap-5 w-max">
        {tiles.map((rowTiles, row) =>
          rowTiles.map((tile, col) => (
            <Tile
              value={tile.value}
              isFilled={tile.isFilled}
              key={tile.index}
              index={tile.index}
              onClick={() => handleClick(row, col)}
            />
          ))
        )}
      </div>
      <div className="flex justify-between items-center w-full px-5 text-lg font-medium md:w-1/2">
        <div>Player 1: X</div>
        <div>Player 2: O</div>
      </div>
    </div>
  );
}
