import React, {FC} from 'react';
import {Platform} from 'react-native';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, View} from 'native-base';
import {Post} from '~ts/interfaces';
import {ZPostItem} from './ZPostItem';

export interface ZPostListProps {
  data: Post[];
  onPress: (id: string, userId: string) => void;
}

const ZPostList: FC<ZPostListProps> = ({data, onPress}) => {
  const isAndroid = Platform.OS === 'android';
  return (
    <FlatList<Post>
      keyExtractor={(item, index) => `${item.id}-${index}`}
      data={data}
      renderItem={({item}: ListRenderItemInfo<Post>) => (
        <ZPostItem data={item} onPress={onPress} />
      )}
      ItemSeparatorComponent={() => (
        <View h="1px" marginLeft={isAndroid ? 0 : 4} bg="gray.200" />
      )}
    />
  );
};

export {ZPostList};
