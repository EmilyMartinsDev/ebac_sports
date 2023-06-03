import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoListType = {
  items: Produto[]
}

const initialState: FavoritoListType = {
  items: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    addFavorito: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      if (state.items.find((p) => p.id !== favorito.id)) {
        const retiraProduto = state.items.filter((p) => p.id !== favorito.id)
        state.items = []
        retiraProduto.map((p) => state.items.push(p))
      } else {
        state.items.push(favorito)
      }
    }
  }
})
export const { addFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
