import * as S from './styles'

import { RootRedux } from '../../store'
//import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'

const Header = () => {
  const items = useSelector((state: RootRedux) => state.carrinho.items)
  const favoritosLenght = useSelector(
    (state: RootRedux) => state.favorito.items.length
  )
  const valorTotal = items.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritosLenght} favoritos</span>

        <span>
          {items.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
