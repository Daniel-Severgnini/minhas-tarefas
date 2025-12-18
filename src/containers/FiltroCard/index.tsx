import * as S from './styles'

export type Props = {
  active?: boolean
  contador: number
  legenda: string
}

const FilterCard = ({ active, contador, legenda }: Props) => (
  <S.Card active={active}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FilterCard
