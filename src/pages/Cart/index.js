import DisplayProducts from "./ProductsTable"
import EmptyCart from "./EmptyCart"
import { ColorRing } from "react-loader-spinner"
import { MainContentContainer, ScreenContainer } from "./style"
import { useGetCartItens } from "../../services/cartApi"
import { useEffect } from "react"

export default function Cart() {
  const { products, getCartItens } = useGetCartItens()

  return (
    <ScreenContainer>
      {!products && <ColorRing height="90" width="90" />}
      <MainContentContainer>
        <h2>Carrinho de Compras</h2>
        {products && products.length === 0 && <EmptyCart />}
        {products && products.length > 0 && (
          <DisplayProducts products={products} getCartItens={getCartItens} />
        )}
      </MainContentContainer>
    </ScreenContainer>
  )
}
