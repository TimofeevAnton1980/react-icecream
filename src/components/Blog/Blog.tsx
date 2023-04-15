import React from "react";
import * as styles from "./styles.module.css";
import BasketContainer from "../../containers/BasketContainer/BasketContainer";
import { useAppSelector } from "../../hooks/hook_ts";
import { RootState } from "../../store/store";
import { FixedSizeList } from "react-window";
import { size, widthWindow } from "../constants/heigh-width";
import { selectBlogIds } from "../../store/blog/selectors";
import { BlogItemsContainer } from "../../containers/BlogItemsContainer/BlogItemsContainer";
import { BasketProvider } from "../../containers/BasketProvider/BasketProvider";

interface renderRowInterface {
  index: number;
}

export const Blog = () => {
  const listArray = useAppSelector((state: RootState) => selectBlogIds(state));
  // console.log(listArray);
  const Items = ({ index }: renderRowInterface) => (
    <BlogItemsContainer
      blogId={listArray[index]}
      style={{
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
      <div className={styles.main}>
        <div className={styles.contentWrapper}>
          <FixedSizeList
            className={styles.content}
            height={600}
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
