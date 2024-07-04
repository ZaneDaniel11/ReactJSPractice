import Hello from "./components/Hello";
import Headers from "./components/Headers";
function App() {
  const data = {
    name: "Zane Daniel",
    message: "Hello",
    sitnumber: [1, 3, 4],
  };
  return (
    <div className="App">
      <Headers />
      <Hello data={data} />
    </div>
  );
}

export default App;
