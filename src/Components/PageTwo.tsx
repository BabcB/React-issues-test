import { useNavigate } from 'react-router-dom';

const PageTwo = () => {
  const navigate = useNavigate();

  console.log('two');

  const handleNavigate = () => {
    setTimeout(() => {
      navigate('/page-three');
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div>
      <h1>Page Two</h1>
      <button onClick={handleNavigate}>Go to Page Three</button>
    </div>
  );
};

export default PageTwo;
