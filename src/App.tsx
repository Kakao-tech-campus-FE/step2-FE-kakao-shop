import mainRouter from '@router/mainRouter';
import React from 'react';

const App = () => {
  const routes = mainRouter();

  return <div>{routes}</div>;
};

export default App;
