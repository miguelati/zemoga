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
  const keyExtractor = (item: Partial<Comment>, index: number) =>
    `${item.id}-${index}`;
  const RenderItem = ({item}: ListRenderItemInfo<Partial<Comment>>) => (
    <ZCommentItem data={item} />
  );
  const Separator = () => (
    <View h="1px" marginLeft={isAndroid ? 0 : 4} bg="gray.200" />
  );
  return (
    <VStack flex={1}>
      <View h={10} bg="gray.300" px={4} justifyContent="center">
        <Text bold>{i18n.t('POSTS.DETAILS.TITLE_COMMENTS').toUpperCase()}</Text>
      </View>
      <FlatList<Partial<Comment>>
        flex={1}
        removeClippedSubviews
        keyExtractor={keyExtractor}
        data={data}
        renderItem={RenderItem}
        ItemSeparatorComponent={Separator}
      />
    </VStack>
  );
};

export {ZCommentList};
