import React from "react";
import * as css from "./styles.module.css";
import { CatalogItemsContainer } from "../../containers/CatalogItemsContainer/CatalogItemsContainer";
import { FixedSizeList } from "react-window";
import * as styles from "../CatalogItems/styles.module.css";
import { size, widthWindow } from "../constants/heigh-width";
import { useAppSelector } from "../../hooks/hook_ts";
import { RootState } from "../../store/store";
import { selectProductPromotion } from "../../store/products/selectors";
import { BasketProvider } from "../../containers/BasketProvider/BasketProvider";
import BasketContainer from "../../containers/BasketContainer/BasketContainer";

interface renderRowInterface {
  index: number;
}
export const Promotion = () => {
  const listArray = useAppSelector((state: RootState) =>
    selectProductPromotion(state)
  );

  const Items = ({ index }: renderRowInterface) => (
    <CatalogItemsContainer
      productId={listArray[index]}
      style={{
        ...(index % 2 == 0
          ? { backgroundColor: "#F7F7F7" }
          : { backgroundColor: "white" }),
        ...(listArray.length == index + 1 && {
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        }),
      }}
      key={index}
    />
  );
  return (
    <BasketProvider>
      <div className={css.container}>
        <div className={css.present}>
          <div className={css.blockWrapper}>
            <h2 className={css.title}>Наше предложение</h2>
            <div className={css.text}>
              Специальная цена на указанные товары!
            </div>
          </div>
        </div>
        <div className={css.contentWrapper}>
          <FixedSizeList
            className={styles.content}
            height={400}
            width={widthWindow - 50}
            itemCount={listArray.length}
            itemSize={size}
          >
            {Items}
          </FixedSizeList>
          <BasketContainer />
        </div>
      </div>
    </BasketProvider>
  );
};
