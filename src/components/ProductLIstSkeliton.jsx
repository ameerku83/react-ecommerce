import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
const ProductLIstSkeliton = () => {
  return (
    <div>
         <div style={{display:'flex',height:500,gap:10}}>
        <Col md={4}   >
        <Skeleton height={200}/>
        <Skeleton count={4} />
        <Skeleton count={1} />
        <div style={{justifyContent:"space-around",display:"flex"}} >
        <Skeleton height={30} width={120}/> <Skeleton height={30} width={120}/>
        </div>
        </Col>
        <Col md={4}   >
        <Skeleton height={200}/>
        <Skeleton count={4} />
        <Skeleton count={1} />
        <div style={{justifyContent:"space-around",display:"flex"}} >
        <Skeleton height={30} width={120}/> <Skeleton height={30} width={120}/>
        </div>
        </Col>
        <Col md={4}   >
        <Skeleton height={200}/>
        <Skeleton count={4} />
        <Skeleton count={1} />
        <div style={{justifyContent:"space-around",display:"flex"}} >
        <Skeleton height={30} width={120}/> <Skeleton height={30} width={120}/>
        </div>
        </Col>
        </div>
    </div>
  )
}

export default ProductLIstSkeliton