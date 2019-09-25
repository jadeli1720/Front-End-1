import React from 'react';
import { Card, Button } from 'semantic-ui-react'

import { axiosWithAuth } from '../utilites/axiosWithAuth';

const ProductCard = (props) =>  {

    const deleteProduct = () => {
        axiosWithAuth()
          .delete(`/products/delete/${props.id}`)
          .then(res => {
              console.log(`Product with id ${props.id} deleted`);
              props.setUpdate(res)
          })
          .catch(err => console.log(err));
    };


    return (

    <Card>
        <Card.Content>
            <Card.Header>{props.productName}</Card.Header>
            <Card.Meta>Price: {props.price}$</Card.Meta>
            <Card.Description>Descriprion: {props.description}</Card.Description>
        </Card.Content>
        <Button onClick={deleteProduct} >Delete</Button>
    </Card>
    );


}

export default ProductCard;