import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, VStack, HStack, Text, useToast } from '@chakra-ui/react';

export default function PartyRoom() {
  const { roomCode } = useParams();
  const [isSharing, setIsSharing] = useState(false);
  const toast = useToast();

  const startSharing = () => {
    setIsSharing(true);
    toast({
      title: 'Sharing started',
      description: 'You are now sharing your screen',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const stopSharing = () => {
    setIsSharing(false);
    toast({
      title: 'Sharing stopped',
      description: 'You have stopped sharing your screen',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={8} align="center" justify="center" width="100%" maxWidth="800px">
        <Text fontSize="2xl" fontWeight="bold">Room: {roomCode}</Text>
        <HStack spacing={4} width="100%">
          <Box width="50%" height="400px" border="1px solid" borderColor="gray.200" borderRadius="md">
            <iframe
              src="https://www.instagram.com/reels/"
              width="100%"
              height="100%"
              title="Instagram Reels"
              style={{ border: 'none' }}
            />
          </Box>
          <Box width="50%" height="400px" border="1px solid" borderColor="gray.200" borderRadius="md" bg="gray.100" display="flex" alignItems="center" justifyContent="center">
            <Text>Shared screen will appear here</Text>
          </Box>
        </HStack>
        <Button 
          onClick={isSharing ? stopSharing : startSharing} 
          colorScheme={isSharing ? "red" : "green"}
          size="lg"
          width="200px"
        >
          {isSharing ? "Stop Sharing" : "Start Sharing"}
        </Button>
      </VStack>
    </Box>
  );
}