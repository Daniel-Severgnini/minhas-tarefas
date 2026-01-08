import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Tarefa[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      title: 'Estudar na EBAC com mais frequência',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      description: 'Estudar com mais frequência'
    },
    {
      id: 2,
      title: 'Estudar JavaScript',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      description: 'Estudar com mais frequência'
    },
    {
      id: 3,
      title: 'Estudar React',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      description: 'Estudar com mais frequência'
    },
    {
      id: 4,
      description: 'Praticar',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      title: 'Praticar React'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Tarefa>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    }
  }
})

export const { remover, edit } = tasksSlice.actions

export default tasksSlice.reducer
