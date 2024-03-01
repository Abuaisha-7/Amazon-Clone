import React, { useContext } from 'react'
import classes from "./Cart.module.css";
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider';

const Cart = () => {

  const [{basket, user}, dispatch] = useContext(DataContext)


  return (
    <Layout>
      <div>Cart</div>
    </Layout>
  )
}

export default Cart