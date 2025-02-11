import { ProductType } from "./products.types";
import imageSrc from "../../../public/product-bg.jpeg";

export const bestSellersProductsMock: ProductType[] = [
  {
    id: "1",
    name: "Açaí Natural da Casa",
    priceLabel: "R$40,00",
    discountedPriceLabel: "R$20,00",
    image: imageSrc,
    description:
      "Sabor intenso e específico do fruto açaí com sabor único e agradável, que no momento de consumo pode ser...",
    discountTagLabel: "-50%",
  },
  {
    id: "2",
    name: "10 Litros de Sorvete de Açaí",
    priceLabel: "R$100,00",
    discountedPriceLabel: "R$50,00",
    image: imageSrc,
    description:
      "Açaí extra cremoso de qualidade, (laça cremes) na cumbuca de isopor, com coberturas e complementos variados.",
    discountTagLabel: "-50%",
  },
  {
    id: "3",
    name: "Açaí com Morango",
    priceLabel: null,
    discountedPriceLabel: "R$22,90",
    image: imageSrc,
    description:
      "Açaí extra cremoso de qualidade, (laça cremes) na cumbuca de isopor, com coberturas e complementos variados.",
    discountTagLabel: null,
  },
];
