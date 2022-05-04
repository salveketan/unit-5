
// import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    startInterval();
  }, []);
  // console.log("x is :",ref.current)
  const startInterval = () => {

    counterRef.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1080);
    return setCounter(counter)
  }

  return (
    <div className="App">
      <h1>Ketan Salve Timer</h1>
      <div className='box'>
        <h1>Counter: {counter}</h1>

        <button onClick={() => {
          clearInterval(counterRef.current)

          // setCounter(counter+1);
        }}>pause</button>
        <button onClick={() => {
          startInterval();
        }}>start</button>
        <button onClick={() => {
          clearInterval(counterRef.current);
          setCounter(0)
        }}>reset</button>
      </div>
    </div>
  );
}

export default App;
