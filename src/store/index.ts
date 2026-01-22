import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from './reducers/tasks'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
