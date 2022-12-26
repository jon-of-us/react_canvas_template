import { Canvas } from "./canvas/canvas";


function Heading({title}: {title: string}) {
  return <h1>{title}</h1>;
}

function App() {
  return (
    <div className="App">
      <Heading title="Hello Hello" />
      <Canvas />
    </div>
  );
}

export default App;
