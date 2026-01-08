import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, edit } from '../../store/reducers/tasks'
import TarefaClass from '../../models/Task'

type Props = TarefaClass

const Tarefa = ({
  description: descriptionOriginal,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descriptionOriginal.length > 0) {
      setDescricao(descriptionOriginal)
    }
  }),
    [descriptionOriginal]

  function cancelEdit() {
    setEditing(false)
    setDescricao(descriptionOriginal)
  }

  return (
    <S.Card>
      <S.Tittle>{title}</S.Tittle>
      <S.Tag parametro="prioridade" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!editing}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.ActionBar>
        {editing ? (
          <>
            <S.buttonSave
              onClick={() => {
                dispatch(
                  edit({
                    description: descricao,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </S.buttonSave>
            <S.buttonCancelRemove onClick={cancelEdit}>
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
