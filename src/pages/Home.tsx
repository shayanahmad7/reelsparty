import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, VStack, Heading, Text, useToast } from '@chakra-ui/react';

export default function Home() {
  const [roomCode, setRoomCode] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const createRoom = () => {
    const newRoomCode = Math.random().toString(36).substring(7);
    navigate(`/party/${newRoomCode}`);
  };

  const joinRoom = () => {
    if (roomCode) {
      navigate(`/party/${roomCode}`);
    } else {
      toast({
        title: 'Error',
        description: 'Please enter a room code',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={8} align="center" justify="center" width="100%" maxWidth="400px">
        <Heading size="2xl">ReelsParty</Heading>
        <Text fontSize="xl">Watch Instagram Reels together with friends!</Text>
        <Button onClick={createRoom} colorScheme="blue" size="lg" width="100%">
          Create New Room
        </Button>
        <Input 
          placeholder="Enter room code" 
          value={roomCode} 
          onChange={(e) => setRoomCode(e.target.value)}
          size="lg"
        />
        <Button onClick={joinRoom} colorScheme="green" size="lg" width="100%">
          Join Room
        </Button>
      </VStack>
    </Box>
  );
}