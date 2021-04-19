import React from 'react';
import {View, Text} from 'react-native';
import { AppProvider } from './app/global';
import { Container } from './app/shared/styles';
import Home from './app/views';

const App = () => {
  return (
    <AppProvider>
      <Container>
         <Home />
      </Container>
    </AppProvider>
  );
};

export default App;
