import { useState } from 'react';

const App = () => {
  const [modalInstances, setModalInstances] = useState<string[]>([]);

  const handleClick = () => {
    setTimeout(() => {
      setModalInstances((prev) => [...prev, 'New Modal']);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>

      {modalInstances.map((modal, index) => (
        <div key={index} className="modal">
          {modal} {index + 1}
        </div>
      ))}
    </div>
  );
};

export default App;
