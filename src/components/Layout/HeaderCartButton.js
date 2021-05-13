import React, { useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

function HeaderCartButton(props) {
  const [btnH, setbtnH] = useState(false);

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnH ? classes.bump : ""}`;

  const {items}= cartCtx;

  useEffect(() => {
    if(cartCtx.items.length===0){
        return;
    }
    setbtnH(true);
    const timer = setTimeout(()=>{
        setbtnH(false);
    },300)
    return () =>{
        clearTimeout(timer);
    }

  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
