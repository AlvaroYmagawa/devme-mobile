import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'justParty',
      storage: AsyncStorage, // This config is nedeed to mobile env
      whiteList: ['auth', 'user'], // Only persists the reducers inside the whiteList
    },
    reducers,
  );

  return persistedReducer;
};
