import React from 'react';
import {Box, Text, VStack} from 'native-base';

const Lists = () => {
  return (
    <Box safeArea>
      <VStack m="auto" width={350} space={3}>
        <Text fontSize="xl" bold>
          Lists
        </Text>
      </VStack>
    </Box>
  );
};

export {Lists};
