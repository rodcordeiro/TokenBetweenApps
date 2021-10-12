import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './Routes';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Routes />
    </>
  );
};

export default App;
