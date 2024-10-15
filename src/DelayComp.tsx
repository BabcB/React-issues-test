// import { lazy } from 'react';

// const Comp = lazy(() =>
//   import('./App').then((module) => ({ default: module.Fallback }))
// );

const DelayComp = () => {
  console.log('Delayed Component');

  return <div>Delay loading</div>;
};

export default DelayComp;

export const DelayComp2 = () => {
  console.log('Delayed 2 Component');

  const handleClick = async () => {
    console.log('imported');
    const data = import('./constants');
    const another = await data;
    console.log(another.default, another.summa2);
    data.then((data) => console.log({ default: data.default }));
    data.then((data) => console.log({ summa2: data.summa2 }));
    console.log('imported end');
  };

  return (
    <div>
      <div>Delay 2 loading</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
