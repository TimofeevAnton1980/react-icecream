import React from "react";
import * as css from "./styles.module.css";
import { widthWindow } from "../constants/heigh-width";
import { useAppDispatch } from "../../hooks/hook_ts";
import basketSlice from "../../store/basket";
import { Button } from "../Button/Button";

interface SlideInterface {
  children: React.ReactNode;
  picture: string;
  pictureMin: string;
  basket: string[];
}
const Slide: React.FC<SlideInterface> = ({
  children,
  picture,
  pictureMin,
  basket,
}) => {
  const image = widthWindow > 800 ? picture : pictureMin;
  const myStyle = { backgroundImage: `url(${image})` };
  const dispatch = useAppDispatch();
  const onAddProduct = () => {
    basket.forEach((productId) => {
      dispatch<any>(basketSlice.actions.add({ productId }));
      localStorage.setItem("counter", productId);
    });
  };

  // const onAddProduct = dispatch<any>(basketSlice.actions.add({ productId }));
  //     localStorage.setItem('counter', productId); console.log(productId);

  return (
    <div className={css.container}>
      <div className={css.content} style={myStyle}>
        &nbsp;
      </div>
      <footer className={css.footer}>
        {children}
        <Button
          onClick={onAddProduct}
          primary={true}
          label={"Button"}
          name={"Давайте оба!"}
          className={css.button}
        />
      </footer>
    </div>
  );
};

export default Slide;
