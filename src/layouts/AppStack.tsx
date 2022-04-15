import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostsStack} from '~features/Posts';

type AppStackParamList = {
  PostsStack: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="PostsStack"
        component={PostsStack}
      />
    </Stack.Navigator>
  );
};

export {AppStack};
