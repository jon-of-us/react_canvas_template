import { Canvas } from "./setup/canvas";
import "./setup/site_style";
import "hello.css";

function Heading({ title }: { title: string }) {
    return <h1 style={{ color: "white" }}>{title}</h1>;
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
