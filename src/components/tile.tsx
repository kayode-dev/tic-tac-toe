export interface TileData {
  index: number;
  value: "X" | "O" | "";
  isFilled: boolean;
}
export default function Tile({ ...props }: TileData) {
  const fillTile = () => {
    props.value = "O";
  };
  return (
    <div
      className="size-20 bg-black/60 rounded-md flex items-center justify-center"
      onClick={fillTile}
    >
      <p>{props.value}</p>
    </div>
  );
}
