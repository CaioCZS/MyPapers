import styled from "styled-components";
import Header from "../../components/Header/index";
import EmptyCart from "./EmptyCart";
import DisplayProducts from "./ProductsTable";
import { MainContentContainer, ScreenContainer } from "./style";

export default function Cart() {
  return (
    <ScreenContainer>
      <Header />
      <MainContentContainer>
        <h2>Carrinho de Compras</h2>
        {/* ---------- Carrinho vazio ---------- */}
        <EmptyCart />
        {/* --------- Itens no carrinho --------- */}
        {/* <DisplayProducts /> */}
      </MainContentContainer>
    </ScreenContainer>
  );
}
