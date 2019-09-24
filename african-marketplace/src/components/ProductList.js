import React, { useState } from "react";
import { data } from "./DummyData";
import Picky from "react-picky";
// import { render } from "react-dom";
// import "react-picky/dist/picky.css";

const categories = [];
const allCategories = [];

for (let i = 0; i < data.length; i++) {
  allCategories.push(Object.values(data[i])[3]);
}

const uniqueSet = [...new Set(allCategories)];
for (let k = 0; k < uniqueSet.length; k++) {
  categories.push({ id: k, name: `${uniqueSet[k]}` });
}

function ProductList() {
  const [arrayValue, setArrayValue] = useState([]);
  const selectMultipleOption = value => setArrayValue(value);

  return (
    <div className="products-container">
      <div className="item-browser">
        <div className="row">
          <div className="col">
              <h2>Browse Categories</h2>
            <Picky
              value={arrayValue}
              options={categories}
              onChange={selectMultipleOption}
              open={true}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={false}
              includeFilter={true}
              dropdownHeight={400}
            />
          </div>
        </div>
      </div>
      <div className="listed-items">
        {arrayValue.length === 0
          ? data.map((product, index) => (
              <div key={index} className="product">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            ))
          : data
              .filter(product =>
                arrayValue.map(item => item.name).includes(product.subcategory)
              )
              .map((filteredProduct, index) => (
                <div key={index} className="product">
                  <img src={filteredProduct.image} alt={filteredProduct.name} />
                  <h3>{filteredProduct.name}</h3>
                  <p>{filteredProduct.category}</p>
                </div>
              ))}
      </div>
    </div>
  );
}

export default ProductList;
