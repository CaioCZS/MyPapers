import ProductRow from "../../../components/CartProductRow";
import { ButtonsContainer } from "../style";
import { ProductsContainer, ProductsList, TotalBar } from "./style";

export default function DisplayProducts() {
  const PRODUCTS = [
    {
      id: 1,
      name: "Marcador de páginas beija flor nuvem flora",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/marcador_de_paginas_beija_flor_nuvem_floral_1793_1_504ee179f3262685e395e8d8783be925.jpg",
      category: "notebooks",
      price: 13.9,
    },
    {
      id: 2,
      name: "Lapiseira tris signature boho 07mm",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/lapiseira_tris_signature_boho_0_7mm_1637_1_2b77cb2d62afefd3930e17b28a5d5d99.jpg",
      category: "notebooks",
      price: 9.8,
    },
    {
      id: 3,
      name: "Estojo para pinceis com espelho maisa",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/180_estojo_para_pinceis_com_espelho_maisa_559_1_20201201100251.jpg",
      category: "organization",
      price: 57.5,
    },
    {
      id: 4,
      name: "Marcador de páginas beija flor nuvem flora",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/marcador_de_paginas_beija_flor_nuvem_floral_1793_1_504ee179f3262685e395e8d8783be925.jpg",
      category: "notebooks",
      price: 13.9,
    },
    {
      id: 5,
      name: "Marcador de páginas beija flor nuvem flora",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/marcador_de_paginas_beija_flor_nuvem_floral_1793_1_504ee179f3262685e395e8d8783be925.jpg",
      category: "notebooks",
      price: 13.9,
    },
    {
      id: 6,
      name: "Marcador de páginas beija flor nuvem flora",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/marcador_de_paginas_beija_flor_nuvem_floral_1793_1_504ee179f3262685e395e8d8783be925.jpg",
      category: "notebooks",
      price: 13.9,
    },
    {
      id: 7,
      name: "Marcador de páginas beija flor nuvem flora",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/marcador_de_paginas_beija_flor_nuvem_floral_1793_1_504ee179f3262685e395e8d8783be925.jpg",
      category: "notebooks",
      price: 13.9,
    },
    {
      id: 8,
      name: "Marcador de páginas beija flor nuvem flora",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/marcador_de_paginas_beija_flor_nuvem_floral_1793_1_504ee179f3262685e395e8d8783be925.jpg",
      category: "notebooks",
      price: 13.9,
    },
    {
      id: 9,
      name: "Marcador de páginas beija flor nuvem flora",
      image:
        "https://images.tcdn.com.br/img/img_prod/747125/marcador_de_paginas_beija_flor_nuvem_floral_1793_1_504ee179f3262685e395e8d8783be925.jpg",
      category: "notebooks",
      price: 13.9,
    },
  ];

  return (
    <>
      <ProductsContainer>
        <ProductsList>
          <ul>
            {PRODUCTS.map((p) => (
              <ProductRow key={p.id} product={p} />
            ))}
          </ul>
        </ProductsList>
      </ProductsContainer>

      <TotalBar>
        <strong>Total</strong>
        <div>R$ 50,00</div>
      </TotalBar>

      <ButtonsContainer>
        <button>
          <p>Finalizar Pedido</p>
        </button>
        <button>
          <p>Continuar Comprando</p>
        </button>
      </ButtonsContainer>
    </>
  );
}
