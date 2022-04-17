import React, {FC} from 'react';
import {HStack, View, Text} from 'native-base';
import {Comment} from '~ts/interfaces';

export interface ZIconButtonProps {
  data: Partial<Comment>;
}

const ZCommentItem: FC<ZIconButtonProps> = ({data}) => {
  return (
    <HStack h={50} mx={4}>
      <View flex={1} justifyContent="center">
        <Text>{data.body}</Text>
      </View>
    </HStack>
  );
};

export {ZCommentItem};
