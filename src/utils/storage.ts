import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const setKey = (key: string, value: boolean | string) => {
  storage.set(key, value);
};
