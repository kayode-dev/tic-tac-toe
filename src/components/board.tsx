import { useState } from "react";
import Tile, { TileData } from "./tile";

export default function Board() {
  const [tiles, setTiles] = useState<TileData[][]>([
    [
      { index: 1, value: "", isFilled: false },
      { index: 2, value: "", isFilled: false },
      { index: 3, value: "", isFilled: false },
    ],
    [
      { index: 4, value: "", isFilled: false },
      { index: 5, value: "", isFilled: false },
      { index: 6, value: "", isFilled: false },
    ],
    [
      { index: 7, value: "", isFilled: false },
      { index: 8, value: "", isFilled: false },
      { index: 9, value: "", isFilled: false },
    ],
  ]);

  const winningPatterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  return (
    <div className="p-4 bg-teal-500 rounded-2xl grid grid-cols-3 gap-5">
      {tiles.map((rowTiles) =>
        rowTiles.map((tile) => (
          <Tile
            value={tile.value}
            isFilled={tile.isFilled}
            key={tile.index}
            index={tile.index}
          />
        ))
      )}
    </div>
  );
}
