import React, {FC} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, View} from 'native-base';
import {Post} from '~ts/interfaces';
import {ZPostItem} from './ZPostItem';

export interface ZIconButtonProps {
  data: Post[];
}

const ZPostList: FC<ZIconButtonProps> = ({data}) => {
  return (
    <FlatList<Post>
      keyExtractor={(item, index) => `${item.id}-${index}`}
      data={data}
      renderItem={({item}: ListRenderItemInfo<Post>) => (
        <ZPostItem data={item} />
      )}
      ItemSeparatorComponent={() => <View h="1px" bg="gray.200" />}
    />
  );
};

export {ZPostList};
