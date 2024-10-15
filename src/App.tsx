import { lazy, Suspense } from 'react';
import './App.css';

const DelayComp = lazy(() => import('./DelayComp'));
const DelayComp2 = lazy(() =>
  import('./DelayComp').then((module) => ({
    default: module.DelayComp2,
  }))
);

function App() {
  console.log('App');

  return (
    <div className="card">
      <Suspense fallback={<Fallback />}>
        <DelayComp />
        <DelayComp2 />
      </Suspense>
    </div>
  );
}

export default App;

export const Fallback = () => {
  console.log('Fallback');

  return <div>Loading...</div>;
};
