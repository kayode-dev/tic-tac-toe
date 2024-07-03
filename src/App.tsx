import Board from "./components/board";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen bg-black/80 text-white">
      <p>Tic-Tac-Toe motherfucker</p>
      <Board />
    </main>
  );
}

export default App;
