import React, {FC} from 'react';
import {Platform} from 'react-native';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, View, VStack, Text} from 'native-base';
import {Comment} from '~ts/interfaces';
import {ZCommentItem} from './ZCommentItem';
import i18n from '~i18n';

export interface ZPostListProps {
  data: Partial<Comment>[];
}

const ZCommentList: FC<ZPostListProps> = ({data}) => {
  const isAndroid = Platform.OS === 'android';
  return (
    <VStack flex={1}>
      <View h={10} bg="gray.300" px={4} justifyContent="center">
        <Text bold>{i18n.t('POSTS.DETAILS.TITLE_COMMENTS').toUpperCase()}</Text>
      </View>
      <FlatList<Partial<Comment>>
        flex={1}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        data={data}
        renderItem={({item}: ListRenderItemInfo<Partial<Comment>>) => (
          <ZCommentItem data={item} />
        )}
        ItemSeparatorComponent={() => (
          <View h="1px" marginLeft={isAndroid ? 0 : 4} bg="gray.200" />
        )}
      />
    </VStack>
  );
};

export {ZCommentList};
