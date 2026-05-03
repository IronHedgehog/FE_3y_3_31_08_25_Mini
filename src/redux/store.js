import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todosReducer } from "./todos/todosSlice";

// `npm i redux-persist`

const persistConfig = {
  key: "todos", // ключ збереження
  storage, // збереження в локалсторідж
  whitelist: ["todos"], // що ми будемо зберігати
  // blacklist: ["filters"]
};

const rootReducer = combineReducers({
  todos: todosReducer,
  // filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
