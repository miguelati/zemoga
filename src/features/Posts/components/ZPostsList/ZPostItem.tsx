import React, {FC} from 'react';
import {Platform} from 'react-native';
import {HStack, View, Text, useTheme, Pressable} from 'native-base';
import {Post} from '~ts/interfaces';
import {IconNamesEnum} from '~ts/enums';
import {ZIcon} from '~components';

export interface ZIconButtonProps {
  data: Post;
  isFav: boolean;
  isRead: boolean;
  onPress: (id: string, userId: string) => void;
}

const ZPostItem: FC<ZIconButtonProps> = ({data, isFav, isRead, onPress}) => {
  const isAndroid = Platform.OS === 'android';
  const {colors} = useTheme();
  const onPostItemPress = () => {
    onPress(data.id, data.userId);
  };

  return (
    <Pressable onPress={onPostItemPress}>
      <HStack h={50}>
        <View flex={1} alignItems="center" justifyContent="center">
          {!isRead && (
            <ZIcon icon={IconNamesEnum.circle} iconColor={colors.blue[300]} />
          )}
          {isFav && !isAndroid && (
            <ZIcon icon={IconNamesEnum.star} iconColor={colors.yellow[500]} />
          )}
        </View>
        <View flex={6} justifyContent="center">
          <Text>{data.title}</Text>
        </View>
        <View flex={1} alignItems="center" justifyContent="center">
          {isAndroid ? (
            <ZIcon icon={IconNamesEnum.star} iconColor={colors.yellow[500]} />
          ) : (
            <ZIcon
              icon={IconNamesEnum.chevronRight}
              iconColor={colors.gray[400]}
            />
          )}
        </View>
      </HStack>
    </Pressable>
  );
};

export {ZPostItem};
