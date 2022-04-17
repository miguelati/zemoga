import React, {FC} from 'react';
import {VStack, Text} from 'native-base';
import i18n from '~i18n';

export interface ZDescriptionProps {
  content: string;
}

const ZDescription: FC<ZDescriptionProps> = ({content}) => {
  return (
    <VStack m={4}>
      <Text my={1} fontSize="lg" bold>
        {i18n.t('POSTS.DETAILS.TITLE_DESCRIPTION')}
      </Text>
      <Text>{content}</Text>
    </VStack>
  );
};

export {ZDescription};
