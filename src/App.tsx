import Board from "./components/board";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen bg-black/80 text-white gap-20">
      <p className=" text-2xl md:text-3xl font-semibold text-center">
        {" "}
        Numerous Cheffings Presents: Tic-Tac-Toe ;D
      </p>
      <Board />
    </main>
  );
}

export default App;
