import mainRouter from '@router/mainRouter';
import React from 'react';

const App = () => {
  const routes = mainRouter();

  return <div className="bg-[#f2f0f9] w-full h-full">{routes}</div>;
};

export default App;
