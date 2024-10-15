import { useNavigate } from 'react-router-dom';

const PageThree = () => {
  const navigate = useNavigate();

  console.log('three');

  const handleNavigate = () => {
    setTimeout(() => {
      navigate('/page-one');
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div>
      <h1>Page Three</h1>
      <button onClick={handleNavigate}>Go to Page One</button>
    </div>
  );
};

export default PageThree;
