import AsyncStorage from '@react-native-async-storage/async-storage';
import {PostStateEnum} from '~ts/enums';

export const checkState = async (state: PostStateEnum, id: string) => {
  const res = await AsyncStorage.getItem(`@${state}`);
  const favorites = JSON.parse(res || '[]');
  return favorites.includes(id);
};

export const saveState = async (state: PostStateEnum, id: string) => {
  const res = await AsyncStorage.getItem(`@${state}`);
  const favorites = JSON.parse(res || '[]');
  await AsyncStorage.setItem(`@${state}`, JSON.stringify([...favorites, id]));
};

export const removeState = async (state: PostStateEnum, id: string) => {
  const res = await AsyncStorage.getItem(`@${state}`);
  const favorites = JSON.parse(res || '[]');
  await AsyncStorage.setItem(
    `@${state}`,
    JSON.stringify([...favorites.filter((e: string) => e !== id)]),
  );
};
