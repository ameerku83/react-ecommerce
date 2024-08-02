// src/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import useStore from '../store/cartStore';
import CartSkeleton from './CartSkeleton';

const Cart = () => {
    const { cart, removeFromCart,getTotal } = useStore((state) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        getTotal: state.getTotal,
      }));

      


  return (
    <div className="container mt-5">
      <h1 className='pt-3 text-center' >Cart</h1>
      <ListGroup>
        {cart.length === 0 ? (
            <div style={{height:1000}}>
         <h3> Cart is empty</h3>
         </div>


        ) : (
          cart.map((item) => (
            <ListGroup.Item key={item.id} >
              <div>
                <img src={item.image} alt="" height={150} width={100}  style={{objectFit:"contain"}}/>
                <h5>{item.title}</h5>
                <p>{item.price}</p>
              </div>
              <Button 
                variant="danger" 
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
              <Button variant="warning m-2"  as={Link} to={"/product/"+item.id} >Bay now</Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
      <h4>Total Price: {getTotal().toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
