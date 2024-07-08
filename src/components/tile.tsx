export interface TileData {
  index: number;
  value: "X" | "O" | "";
  isFilled: boolean;
  onClick: () => void;
}
export default function Tile({ ...props }: TileData) {
  return (
    <button
      className="size-32 bg-black/60 rounded-md flex text-6xl items-center justify-center cursor-pointer"
      onClick={props.onClick}
    >
      <p>{props.value}</p>
    </button>
  );
}
