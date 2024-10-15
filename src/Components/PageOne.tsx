import { useNavigate } from 'react-router-dom';

const PageOne = () => {
  const navigate = useNavigate();

  console.log('one');

  const handleNavigate = () => {
    setTimeout(() => {
      navigate('/page-two');
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div>
      <h1>Page One</h1>
      <button onClick={handleNavigate}>Go to Page Two</button>
    </div>
  );
};

export default PageOne;
