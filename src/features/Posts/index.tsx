import React from 'react';
import {useTheme} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import {Lists} from '~features/Posts/Lists';
import {Details} from '~features/Posts/Details';
import {getHeaderStyle} from './utils';

type PostsStackParamList = {
  Lists: undefined;
  Details: undefined;
};

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
        options={{headerTitle: 'Posts'}}
        name="Lists"
        component={Lists}
      />
      <Stack.Screen
        options={{headerTitle: 'Details'}}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export {PostsStack};
