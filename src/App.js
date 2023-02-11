import { useState, useEffect } from "react";
import Button from "./Button.js";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  useEffect(() => {
    console.log("I am called only once!!!");
  }, []);

  useEffect(() => {
    console.log("I am called when counter changes!!!");
  }, [counter]);

  useEffect(() => {
    console.log("I am called when keyword changes!!!");
  }, [keyword]);

  useEffect(() => {
    console.log("I am called when counter or keyword changes!!!");
  }, [counter, keyword]);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={onClick}>Click me</button>
      <br></br>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Type something..."
      />
      <br></br>
      <Button text="Click me" />
    </div>
  );
}

export default App;
