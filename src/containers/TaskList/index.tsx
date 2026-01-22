import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Container } from './styles'
import Tarefa from '../Tarefa'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;{term}&quot;</p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.title}>
            <Tarefa
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TaskList
