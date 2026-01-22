import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type FilterState = {
  term: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  criterio: 'todas'
}

const filterSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { alteraTermo } = filterSlice.actions

export default filterSlice.reducer
