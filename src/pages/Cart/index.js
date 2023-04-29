import Header from "../../components/Header/index";
import EmptyCart from "./EmptyCart";
import DisplayProducts from "./ProductsTable";
import { MainContentContainer, ScreenContainer } from "./style";
import SideBar from "../../components/SideBar";
import { useState } from "react";

export default function Cart() {
  const [hidden, setHidden] = useState(true);

  return (
    <ScreenContainer>
      <Header hidden={hidden} setHidden={setHidden} />
      <SideBar hidden={hidden} setHidden={setHidden} />
      <MainContentContainer>
        <h2>Carrinho de Compras</h2>
        {/* ---------- Carrinho vazio ---------- */}
        {/* <EmptyCart /> */}
        {/* --------- Itens no carrinho --------- */}
        <DisplayProducts />
      </MainContentContainer>
    </ScreenContainer>
  );
}
