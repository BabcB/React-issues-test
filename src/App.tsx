import { useState, useTransition } from 'react';
import './App.css';

function App() {
  const [isPending, startTransition] = useTransition();

  const [count, setCount] = useState(0);
  const [bool, setbool] = useState(false);

  const handleClick = () => {
    setCount((count) => count + 1);
    console.log('out');

    startTransition(() => {
      console.log('in');
      setbool((prev) => !prev);
    });
  };

  console.log({ count, bool, isPending });

  return (
    <div className="card">
      <button onClick={handleClick}>
        count is {count} {bool}
      </button>
      {isPending ? 'Loading...' : ''}
    </div>
  );
}

export default App;
