import * as S from './styles'
const Tarefa = () => (
  <S.Card>
    <S.Tittle>Nome da tarefa</S.Tittle>
    <S.Tag>importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Button>Editar</S.Button>
      <S.Button>Remover</S.Button>
    </S.ActionBar>
  </S.Card>
)

export default Tarefa
