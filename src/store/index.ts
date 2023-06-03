import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import carrinhoState from './reducers/carrinho'
import favoritoState from './reducers/favorito'
export const store = configureStore({
  reducer: {
    carrinho: carrinhoState,
    favorito: favoritoState,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootRedux = ReturnType<typeof store.getState>
