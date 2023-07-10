import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { userApi } from "./api/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  // Poder ejecutar un estado global
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  // Una función que pueda ejecutar datos async que vienen del backend, solicitudes de datos.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
