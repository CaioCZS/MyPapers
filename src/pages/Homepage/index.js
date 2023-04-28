import Header from "../../components/Header"
import {
  ContainerBody,
  Search,
  SearchIcon,
  ContainerAd,
  ContainerProduct,
  Product,
} from "./style"

export default function HomePage() {
  return (
    <>
      <Header />
      <ContainerBody>
        <Search>
          <input placeholder="O que você está procurando?" />
          <SearchIcon />
        </Search>
        <ContainerAd>
          <img alt="ad" src="" />
        </ContainerAd>
        <ContainerProduct>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
        </ContainerProduct>
      </ContainerBody>
    </>
  )
}
