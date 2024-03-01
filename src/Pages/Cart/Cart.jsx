import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  console.log(basket)

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.Cart_container}>
          <h2>Hellow</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps : No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  reanderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subTotal}>
            <div>
              <p>Subtotal ({basket?.length} item)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
