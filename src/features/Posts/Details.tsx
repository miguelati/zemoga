import React from 'react';
import {Box, Text, VStack} from 'native-base';

const Details = () => {
  return (
    <Box safeArea>
      <VStack m="auto" width={350} space={3}>
        <Text fontSize="xl" bold>
          Details
        </Text>
      </VStack>
    </Box>
  );
};

export {Details};
