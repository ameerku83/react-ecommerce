// ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import useStore from '../store/cartStore';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (product.length===0) return (
    <Container className=" mt-5 d-md-flex gap-4 ">
    <div style={{alignItems:"center"}} className='mt-5' >
    <span   > <Skeleton height={300} width={300}/></span  >
   
 
 </div>

   <ListGroup className='w-100 mt-5'>
  <ListGroupItem><h2><Skeleton count={2}/></h2></ListGroupItem>  
    <ListGroupItem> <strong> <Skeleton count={1} width={120} /></strong> </ListGroupItem>
    <ListGroupItem> <Skeleton count={7}/> </ListGroupItem>
    < ListGroupItem>{<Skeleton width={120} height={20} />} </ListGroupItem>
    <div style={{display:"flex",marginTop:10,gap:15}}>
    <span 

>
{<Skeleton width={120} height={30} />}
</span>
<span >{<Skeleton width={120} height={30} />} </span>

    </div>
   </ListGroup>
 
    </Container>
  ) ;

  return (
    <Container className=" mt-5 d-md-flex gap-4">
    <div style={{alignItems:"center"}} className='mt-4' >
    <img src={product.image} alt="" height={300} width={300}  style={{objectFit:"contain"}}/>
   
 
 </div>

   <ListGroup className='mt-5'>
  <ListGroupItem><h2>{product.title}</h2></ListGroupItem>  
    <ListGroupItem> <strong> price: {product.price}/- </strong> </ListGroupItem>
    <ListGroupItem> {product.description} </ListGroupItem>
    <ListGroupItem> Quantity: {product.rating.count} </ListGroupItem>
    <div style={{display:"flex",marginTop:10,gap:15}}>
    <Button 
variant="success" 
onClick={() => addToCart(product)}
>
Add to Cart
</Button>
<Button variant="warning">Bay Now</Button>

    </div>
   </ListGroup>
 
    </Container>
  );
};

export default ProductDetail;
