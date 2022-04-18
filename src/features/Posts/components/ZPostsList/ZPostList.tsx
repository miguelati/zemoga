import React, {FC, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, View} from 'native-base';
import {Post} from '~ts/interfaces';
import {PostStateEnum} from '~ts/enums';
import {ZPostItem} from './ZPostItem';
import {storage} from '~utils';

export interface ZPostListProps {
  data: Post[];
  onPress: (id: string, userId: string) => void;
}

const ZPostList: FC<ZPostListProps> = ({data, onPress}) => {
  const [favs, setFavs] = useState<string[]>([]);
  const [reads, setReads] = useState<string[]>([]);
  const isAndroid = Platform.OS === 'android';
  const keyExtractor = (item: Post, index: number) => `${item.id}-${index}`;
  const RenderItem = ({item}: ListRenderItemInfo<Post>) => {
    return (
      <ZPostItem
        data={item}
        isFav={favs.includes(item.id)}
        isRead={reads.includes(item.id)}
        onPress={onPress}
      />
    );
  };
  const Separator = () => (
    <View h="1px" marginLeft={isAndroid ? 0 : 4} bg="gray.200" />
  );

  useEffect(() => {
    storage.getState(PostStateEnum.favorite).then(v => setFavs(v));
    storage.getState(PostStateEnum.read).then(v => setReads(v));
  }, []);

  return (
    <FlatList<Post>
      removeClippedSubviews
      keyExtractor={keyExtractor}
      data={data}
      renderItem={RenderItem}
      initialNumToRender={20}
      ItemSeparatorComponent={Separator}
    />
  );
};

export {ZPostList};
