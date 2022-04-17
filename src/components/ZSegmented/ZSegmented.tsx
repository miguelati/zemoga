import React, {FC, useState} from 'react';
import {Platform} from 'react-native';
import {useTheme, View} from 'native-base';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {getAndroidStyle, getIOSStyle} from './utils';

export interface ZSegmentedProps {
  options: string[];
  onChange: (index: number) => void;
}

const ZSegmented: FC<ZSegmentedProps> = ({options, onChange}) => {
  const isAndroid = Platform.OS === 'android';
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {colors} = useTheme();

  const onTabPress = (index: number) => {
    setSelectedIndex(index);
    onChange(index);
  };
  return (
    <View h={50} alignItems="center" justifyContent="center">
      <SegmentedControlTab
        values={options}
        selectedIndex={selectedIndex}
        onTabPress={onTabPress}
        {...(isAndroid && getAndroidStyle(colors.green[700], colors.white))}
        {...(!isAndroid && getIOSStyle(colors.green[700], colors.white))}
      />
    </View>
  );
};

export {ZSegmented};
