import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { RootRedux } from '../../store'
import { adicionar } from '../../store/reducers/carrinho'
import { addFavorito } from '../../store/reducers/favorito'
import { useSelector } from 'react-redux'
export type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const favoritosJaEsta = useSelector((state: RootRedux) =>
    state.favorito.items.find((f) => f.id === produto.id)
  )

  const dispatch = useDispatch()
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(addFavorito(produto))}
        type="button"
      >
        {favoritosJaEsta
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
