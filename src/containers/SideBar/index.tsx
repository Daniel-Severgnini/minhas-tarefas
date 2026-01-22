import { useDispatch } from 'react-redux'
import FilterCard from '../FiltroCard'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Camp
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filters>
          <FilterCard legenda="pendentes" contador={1} />
          <FilterCard legenda="concluídas" contador={2} />
          <FilterCard legenda="urgentes" contador={3} />
          <FilterCard legenda="importantes" contador={4} />
          <FilterCard legenda="normal" contador={5} />
          <FilterCard legenda="todas" contador={10} active />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
