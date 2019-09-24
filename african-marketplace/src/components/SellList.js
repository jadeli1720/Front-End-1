import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utilites/axiosWithAuth";

const SellList = () => {
  
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        getData();
      }, []);
    
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
      <>
        <p>Selltest</p>
      </>
    );
  };
  
  export default SellList;