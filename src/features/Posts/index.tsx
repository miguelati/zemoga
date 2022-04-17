import React from 'react';
import {useTheme} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import {Lists} from '~features/Posts/Lists';
import {Details} from '~features/Posts/Details';
import i18n from '~i18n';
import {PostsStackParamList} from './navigation.type';
import {getHeaderStyle} from './utils';

const Stack = createStackNavigator<PostsStackParamList>();

const PostsStack = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        ...getHeaderStyle({
          backgroundColor: colors.green[700],
          color: colors.white,
        }),
      }}>
      <Stack.Screen
        options={{headerTitle: i18n.t('POSTS.LISTS.TITLE')}}
        name="Lists"
        component={Lists}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerBackTitle: ' ',
          headerTintColor: colors.white,
        }}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export {PostsStack};
