import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        <ProductDetails>
          <h1>Camiseta X</h1>
          <span>R$ 79,90</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita, nulla tempore rem fuga, repellendus ad quidem impedit
            beatae magnam sed ratione. Autem quos maxime aspernatur soluta amet
            alias nisi?
          </p>

          <button>Comprar Agora</button>
        </ProductDetails>
      </ImageContainer>
    </ProductContainer>
  );
}
