import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";
import { Link } from 'react-router-dom'

import { Container, Header, Button, Form  } from 'semantic-ui-react'

class AddForm extends React.Component {
  

  state = {
    productData: {
      productName: '',
      price: '',
      description: '',
      user_id: ''
    }
  };

  handleChange = e => {
    this.setState({
      productData: {
        ...this.state.productData,
        [e.target.name]: e.target.value
      }
    });
  };
  
  componentDidMount() {
    const id = localStorage.getItem('userID');
    this.setState({
        productData: {
          ...this.state.productData,
          user_id: id
        }
      });
  }

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/products/add/`, this.state.productData)
      .then(res => {
        console.log("Product added", res);
      })
      .catch(err => console.log('Oh-oh, something wrong', err));
  };
  
    
  render() {
  return (
    <Container text>
      <Header as='h3'>Add new product</Header>
      <Form onSubmit={this.login}>
        <Form.Field>
        <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={this.state.productData.productName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
        <label>Price</label>
          <input
            type="text"
            name="price"
            value={this.state.productData.price}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
        <label>Description</label>
          <input
            type="text"
            name="description"
            value={this.state.productData.description}
            onChange={this.handleChange}
          />
        </Form.Field>
          <Button primary type='submit'>Add product</Button>
          <Button secondary><Link to='/sell'>Back to selling</Link></Button>
        </Form>
    </Container>
  );
  }
};

export default AddForm;