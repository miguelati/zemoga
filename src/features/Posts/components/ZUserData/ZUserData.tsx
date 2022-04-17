import React, {FC} from 'react';
import {VStack, HStack, Text} from 'native-base';
import i18n from '~i18n';
import {User} from '~ts/interfaces';

export interface ZUserDataProps {
  user: Partial<User>;
}

const ZUserData: FC<ZUserDataProps> = ({user}) => {
  return (
    <VStack m={4}>
      <Text my={1} fontSize="lg" bold>
        {i18n.t('POSTS.DETAILS.USER_DATA.TITLE')}
      </Text>
      {Object.keys(user)
        .filter(v => v !== 'id')
        .map((key: string) => (
          <HStack space={1}>
            <Text bold>
              {i18n.t(`POSTS.DETAILS.USER_DATA.LABELS.${key.toUpperCase()}`)}
            </Text>
            <Text>{user[key]}</Text>
          </HStack>
        ))}
    </VStack>
  );
};

export {ZUserData};
