import React, {FC, useEffect, useState} from 'react';
import {HStack, View, Text, useTheme, Pressable} from 'native-base';
import {Post} from '~ts/interfaces';
import {IconNamesEnum, PostStateEnum} from '~ts/enums';
import {ZIcon} from '~components';
import {storage} from '~utils';

export interface ZIconButtonProps {
  data: Post;
  onPress: (id: string, userId: string) => void;
}

const ZPostItem: FC<ZIconButtonProps> = ({data, onPress}) => {
  const {colors} = useTheme();
  const [isFav, setIsFav] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const onPostItemPress = () => {
    onPress(data.id, data.userId);
  };

  useEffect(() => {
    const cb = async () => {
      setIsFav(await storage.checkState(PostStateEnum.favorite, data.id));
      setIsRead(await storage.checkState(PostStateEnum.read, data.id));
    };
    cb();
  }, [setIsFav, setIsRead, data.id]);

  return (
    <Pressable onPress={onPostItemPress}>
      <HStack h={50}>
        <View flex={1} alignItems="center" justifyContent="center">
          {!isRead && (
            <ZIcon icon={IconNamesEnum.circle} iconColor={colors.blue[300]} />
          )}
          {isFav && (
            <ZIcon icon={IconNamesEnum.star} iconColor={colors.yellow[500]} />
          )}
        </View>
        <View flex={6} justifyContent="center">
          <Text>{data.title}</Text>
        </View>
        <View flex={1} alignItems="center" justifyContent="center">
          <ZIcon
            icon={IconNamesEnum.chevronRight}
            iconColor={colors.gray[400]}
          />
        </View>
      </HStack>
    </Pressable>
  );
};

export {ZPostItem};
