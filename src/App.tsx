import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

import InfoType from './components/InfoType';




function App() {
  return (
    <Container>
      <InfoType />
      <CharacterList />
    </Container>
  );
}

export default App;
