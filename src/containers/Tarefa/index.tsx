import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../store/reducers/tasks'
import TarefaClass from '../../models/Task'

type Props = TarefaClass

const Tarefa = ({ description, priority, status, title, id }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  return (
    <S.Card>
      <S.Tittle>{title}</S.Tittle>
      <S.Tag parametro="prioridade" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {editing ? (
          <>
            <S.buttonSave>Salvar</S.buttonSave>
            <S.buttonCancelRemove onClick={() => setEditing(false)}>
              Cancelar
            </S.buttonCancelRemove>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.buttonCancelRemove onClick={() => dispatch(remover(id))}>
              Remover
            </S.buttonCancelRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
