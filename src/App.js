import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incBy, getData } from "./counterSlices";
import Async from "./Async";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <header className="App-header">
            <p>Count {counter.count}</p>

            <div className="container">
              <button className="button" onClick={() => dispatch(increment())}>
                +
              </button>
              <button className="button" onClick={() => dispatch(decrement())}>
                -
              </button>
              <button
                className="button"
                onClick={() => dispatch(incBy({ value: 5 }))}
              >
                +5
              </button>
              <button className="button" onClick={() => dispatch(getData())}>
                Async
              </button>
            </div>
            <Async res={counter?.obj} />
          </header>
        </div>
      </header>
    </div>
  );
}

export default App;
