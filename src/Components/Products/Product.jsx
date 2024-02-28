import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
import classes from './Product.module.css'


const Product = () => {
    const [Products,setProducts] = useState([]);

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      
     .then((res) => {
        console.log(res)
        setProducts(res.data);
        })
        .catch((err) => {
            console.log(err)  
            })
    }, []);

  return (
  <section className={classes.product_contener}>
    {
        Products.map((singleProduct) => {
            return <ProductCard product={singleProduct} key={singleProduct.id}/>
        })
    }
  </section>
  )
}

export default Product;