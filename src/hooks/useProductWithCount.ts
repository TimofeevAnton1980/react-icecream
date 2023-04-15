import { selectProductCountFromBasket } from "../store/basket/selectors";
import { useAppSelector } from "./hook_ts";
import { selectProductImgById, selectProductNameById, selectProductPriceById } from '../store/products/selectors';

export const useProductWithCount = (productId: string) => {
  const productCount: number = useAppSelector((state) =>
    selectProductCountFromBasket({ state, productId })
  );
  return productCount ;
};

export const useProductWithName= (productId: string) => {
  const productName: string = useAppSelector((state) =>
      selectProductNameById({ state, productId })
  );
  return productName;
};

export const useProductWithPrice= (productId: string) => {
  const productPrice: number = useAppSelector((state) =>
      selectProductPriceById({ state, productId })
  );
  return productPrice ;
};
export const useProductWithImg= (productId: string) => {
  const productImg: string = useAppSelector((state) =>
      selectProductImgById({ state, productId })
  );
  return productImg ;
};
