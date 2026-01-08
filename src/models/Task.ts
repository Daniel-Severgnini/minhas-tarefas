import * as enums from '../utils/enums/Task'

class Tarefa {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
  id: number

  constructor(
    tittle: string,
    priority: enums.Priority,
    status: enums.Status,
    description: string,
    id: number
  ) {
    this.title = tittle
    this.priority = priority
    this.status = status
    this.description = description
    this.id = id
  }
}

export default Tarefa
