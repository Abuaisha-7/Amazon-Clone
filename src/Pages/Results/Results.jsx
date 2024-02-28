import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Products/ProductCard";

const Results = () => {
  const [results, setresults] = useState([]);
  const { catagoryName } = useParams();
  // console.log(catagoryName)
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${catagoryName}`)

      .then((res) => {
        console.log(res);
        setresults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Resualts</h1>
        <p style={{ padding: "30px" }}>Catagory/{catagoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Results;
