import React, {FC} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, View} from 'native-base';
import {Post} from '~ts/interfaces';
import {ZPostItem} from './ZPostItem';

export interface ZIconButtonProps {
  data: Post[];
  onPress: (id: number) => void;
}

const ZPostList: FC<ZIconButtonProps> = ({data, onPress}) => {
  return (
    <FlatList<Post>
      keyExtractor={(item, index) => `${item.id}-${index}`}
      data={data}
      renderItem={({item}: ListRenderItemInfo<Post>) => (
        <ZPostItem data={item} onPress={onPress} />
      )}
      ItemSeparatorComponent={() => <View h="1px" bg="gray.200" />}
    />
  );
};

export {ZPostList};
