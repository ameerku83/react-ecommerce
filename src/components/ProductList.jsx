// src/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import useStore from '../store/cartStore';
import ProductLIstSkeliton from './ProductLIstSkeliton';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

 

  return (
    
    <div className="container mt-4">
        
        <Link to={"/cart"}>carty</Link>
      
       <div>
        <Row>
        {  products.length===0 ?
        
        <div>
            <ProductLIstSkeliton/>
            <ProductLIstSkeliton/>
            <ProductLIstSkeliton/>
            <ProductLIstSkeliton/>
            <ProductLIstSkeliton/>
            <ProductLIstSkeliton/>

            <ProductLIstSkeliton/>
        </div>
        
        
        :
        products.map((product) => (
          <Col key={product.id} md={4} className="mt-4">
            <Card>
              <Card.Img variant="top" src={product.image} height={200} style={{objectFit:"contain",padding:5}} />
              <Card.Body>
                <Card.Title>{  product.title || <Skeleton/>}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="warning">Bay Now </Button>
                </Link>
                <Button 
                  variant="success" 
                  className="ms-2"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
     
    </div>
  );
};

export default ProductList;
