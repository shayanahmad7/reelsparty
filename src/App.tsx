import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import PartyRoom from './pages/PartyRoom';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/party/:roomCode" element={<PartyRoom />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;