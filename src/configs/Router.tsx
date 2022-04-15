import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStack} from '~layouts';

type RouterStackParamList = {
  AuthStack: undefined;
  AppStack: undefined;
};

const Stack = createStackNavigator<RouterStackParamList>();

const RouterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="AppStack"
        component={AppStack}
      />
    </Stack.Navigator>
  );
};

export {RouterStack};
