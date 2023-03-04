import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center gap-16 justify-center">
      <div className="flex flex-col items-center">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-gray-100 text-title-h1">React + Tailwind + Tokens</h1>
      <div className="card">
        <button
          className={
            'text-button bg-colors-button-primary-default px-4 py-4 w-full text-colors-button-primary-text hover:bg-colors-button-primary-hover active:bg-colors-button-primary-active rounded-borderRadius-button'
          }
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
