import FilterCard from '../FiltroCard'

import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Camp type="text" placeholder="Buscar"></S.Camp>
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

export default SideBar
