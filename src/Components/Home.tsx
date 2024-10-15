import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/page-one');
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={handleNavigate}>Go to Page One</button>
    </div>
  );
};

export default Home;
