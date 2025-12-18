import SideBar from './containers/SideBar'
import TaskList from './containers/TaskList'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <TaskList />
      </Container>
    </>
  )
}

export default App
