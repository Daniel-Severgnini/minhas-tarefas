import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Container } from './styles'
import Tarefa from '../Tarefa'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {itens.map((t) => (
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
