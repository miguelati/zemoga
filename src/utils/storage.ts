import AsyncStorage from '@react-native-async-storage/async-storage';
import {PostStateEnum} from '~ts/enums';

export const checkState = async (state: PostStateEnum, id: string) => {
  const res = await AsyncStorage.getItem(`@${state}`);
  const stateSaved = JSON.parse(res || '[]');
  return stateSaved.includes(id);
};

export const getState = async (state: PostStateEnum) => {
  const res = await AsyncStorage.getItem(`@${state}`);
  return JSON.parse(res || '[]');
};

export const saveState = async (state: PostStateEnum, id: string) => {
  const res = await AsyncStorage.getItem(`@${state}`);
  const stateSaved = JSON.parse(res || '[]');
  await AsyncStorage.setItem(`@${state}`, JSON.stringify([...stateSaved, id]));
};

export const removeState = async (state: PostStateEnum, id: string) => {
  const res = await AsyncStorage.getItem(`@${state}`);
  const stateSaved = JSON.parse(res || '[]');
  await AsyncStorage.setItem(
    `@${state}`,
    JSON.stringify([...stateSaved.filter((e: string) => e !== id)]),
  );
};

export const removeAllState = async (state: PostStateEnum) => {
  await AsyncStorage.removeItem(`@${state}`);
};
