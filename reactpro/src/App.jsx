import Hello from "./components/Hello";
import Headers from "./components/Headers";
function App() {
  return (
    <div className="App">
      <Headers />
      <Hello greatings="Hello" name="Zane" />
    </div>
  );
}

export default App;
