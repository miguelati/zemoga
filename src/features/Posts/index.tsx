import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Lists} from '~features/Posts/Lists';
import {Details} from '~features/Posts/Details';

type PostsStackParamList = {
  Lists: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<PostsStackParamList>();

const PostsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Lists"
        component={Lists}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export {PostsStack};
