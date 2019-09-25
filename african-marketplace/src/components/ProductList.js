import React, { useState, useEffect } from "react";
import Picky from "react-picky";
import axiosWithAuth from "../utilites/axiosWithAuth";
// import { render } from "react-dom";
// import "react-picky/dist/picky.css";

function ProductList() {
  //STATES AND EVENT HANDLERS
  const [pricingData, setPricingData] = useState([]); //This holds the state for the pricing data received from the endpoint
  const [filterValues, setFilterValues] = useState([]); //This holds the values of the checked items for filter
  const selectMultipleOption = value => setFilterValues(value); //This adds the checked item to the array of checked values

  useEffect(() => {
    axiosWithAuth()
      .get("https://africanmarket.herokuapp.com/api/pricing")
      .then(response => {
        console.log(response.data);
        setPricingData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  //Getting list of sub-categories from data to be rendered by Picky component as checkboxes
  const categories = [];
  const allCategories = [];
  if (pricingData) {
    for (let i = 0; i < pricingData.length; i++) {
      allCategories.push(Object.values(pricingData[i])[2]);
    }
  }

  const uniqueSet = [...new Set(allCategories)];
  for (let k = 0; k < uniqueSet.length; k++) {
    categories.push({ id: k, name: `${uniqueSet[k]}` });
  }

  return (
    <div className="products-container">
      <div className="item-browser">
        <div className="row">
          <div className="col">
            <h2>Browse Categories</h2>
            <Picky
              value={filterValues}
              options={categories}
              onChange={selectMultipleOption}
              open={true}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={false}
              includeFilter={false}
              dropdownHeight={600}
              className="filter-box"
              defaultFocusFilter={true}
            />
          </div>
        </div>
      </div>
      <div className="listed-items">
        {filterValues.length === 0
          ? pricingData.map((product, index) => (
              <div key={index} className="product">
                {/* <img src={product.image} alt={product.productName} /> */}
                <h3>{product.productName}</h3>
                <p>${product.price}</p>
                <p>{product.subCategory}</p>
              </div>
            ))
          : pricingData
              .filter(product =>
                filterValues.map(item => item.name).includes(product.subCategory)
              )
              .map((filteredProduct, index) => (
                <div key={index} className="product">
                  {/* <img src={filteredProduct.image} alt={filteredProduct.productName} /> */}
                  <h3>{filteredProduct.productName}</h3>
                  <p>${filteredProduct.price}</p>
                  <p>{filteredProduct.subCategory}</p>
                </div>
              ))}
      </div>
    </div>
  );
}

export default ProductList;
