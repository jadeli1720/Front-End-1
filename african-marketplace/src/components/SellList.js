import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utilites/axiosWithAuth";
import { Card } from 'semantic-ui-react';

import ProductCard from './ProductCard';

const SellList = () => {
  
    const [productsList, setProductsList] = useState([]);
    const [update, setUpdate] = useState('');
    const [position, setPosition] = useState('');

    useEffect(() => {
        getData();
      }, [update]);
    
    const getData = () => {
    axiosWithAuth()
        .get('/products')
        .then(res => {
            console.log("List of products received: ", res.data);
            setProductsList(res.data);
        })
        .catch(err => console.log(err));
};

  
    return (
      <div className="SellList">
        <p>Selltest</p>
        <Card.Group centered>
                {productsList.map(product => (
                    <ProductCard id={product.id} key={product.id} productName={product.productName} price={product.price} description={product.description} setUpdate={setUpdate} />
                ))}
        </Card.Group>
      </div>
    );
  };
  
  export default SellList;