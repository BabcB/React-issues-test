import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Home, PageOne, PageTwo, PageThree } from './Components';
import { Suspense } from 'react';

function App() {
  console.log('App');
  return (
    <Router basename="/">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

const Loading = () => {
  console.log('Loading');
  return <div>Loading...</div>;
};
