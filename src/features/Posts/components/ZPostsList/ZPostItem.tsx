import React, {FC} from 'react';
import {HStack, View, Text, useTheme} from 'native-base';
import {Post} from '~ts/interfaces';
import {IconNamesEnum} from '~ts/enums';
import {ZIcon} from '~components';

export interface ZIconButtonProps {
  data: Post;
}

const ZPostItem: FC<ZIconButtonProps> = ({data}) => {
  const {colors} = useTheme();
  return (
    <HStack h={50}>
      <View alignItems="center" justifyContent="center">
        <ZIcon icon={IconNamesEnum.circle} iconColor={colors.blue[300]} />
      </View>
      <View flex={6} justifyContent="center">
        <Text>{data.title}</Text>
      </View>
      <View flex={1} alignItems="center" justifyContent="center">
        <ZIcon icon={IconNamesEnum.chevronRight} iconColor={colors.gray[400]} />
      </View>
    </HStack>
  );
};

export {ZPostItem};
