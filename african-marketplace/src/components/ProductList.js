import React, { useState } from "react";
import { data } from "./DummyData";

function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  //const [checked, setChecked] = useState(false);
  const [value, setValue] = useState();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = e => {
    setIsChecked(e.target.check);
    if (e.target.checked) {
      e.preventDefault();
      setValue(e.target.value);
      let filteredItem = data.filter(product => product.category === "food");
      let updatedArray = [...filteredProducts, ...filteredItem];
      setFilteredProducts(updatedArray);
      setValue();
      console.log(filteredProducts);
    } else {
      e.preventDefault();
      let unfilteredItems = data.filter(product => product.category === "food");

      for (let i = 0; i < unfilteredItems.length; i++) {
        let index = filteredProducts.indexOf(unfilteredItems[i]);
        if (index > -1) {
          filteredProducts.splice(index, 1);
        }
        setFilteredProducts(filteredProducts);
      }
      console.log(filteredProducts);
    }
  };

  return (
    <div className="product-listing-container">
      {data.map((product, index) => {
        return (
          <div key={index} index={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 class="product-title">{product.name}</h3>
            <h4 className="product-price">
              Current Price: {`$${product.price}`}
            </h4>
            >
          </div>
        );
      })}
      <form>
        <label htmlFor="nameInput">Food</label>
        <input
          value="Food"
          id="nameInput"
          type="checkbox"
          onChange={handleCheckBox}
          checked={isChecked}
        />
      </form>
    </div>
  );
}

export default ProductList;
