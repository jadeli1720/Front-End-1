import React, { useState } from "react";
import { data } from "./DummyData";
import Picky from "react-picky";
// import { render } from "react-dom";
import "react-picky/dist/picky.css";

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
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Picky
              value={arrayValue}
              options={categories}
              onChange={selectMultipleOption}
              open={true}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              dropdownHeight={50}
            />
          </div>
        </div>
      </div>
      <div>
        {console.log(arrayValue)}
        {arrayValue.length === 0
          ? data.map((product, index) => (
              <div key={index}> {product.name} </div>
            ))
          : data
              .filter(product =>
                arrayValue.map(item => item.name).includes(product.subcategory)
              )
              .map((x, index) => (
                <>
                  <div key={index}> {x.name} </div>
                </>
              ))}
        ;
      </div>
    </>
  );
}

export default ProductList;
