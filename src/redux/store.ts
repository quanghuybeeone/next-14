import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './services/authService';
import { clientApi } from './services/clientService';
import { productApi } from './services/productService';
import { userApi } from './services/userService';
import authReducer from './slices/authSlice';
import loadingReducer from './slices/loadingSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware, productApi.middleware, clientApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
