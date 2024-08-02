import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

const CartSkeleton = () => {
  return (
    <div>
         <div> 
          <div>
            <ListGroup.Item  >
              <div>
                 <span> <Skeleton width={120} height={150} /></span>
                <h5><Skeleton count={1}/></h5>
                <p><Skeleton count={1} /></p>
              </div>
              <div className='d-flex column-gap-4'>
              <span 
               
              >
               <Skeleton width={120} height={30} />
              </span> 
              <span><Skeleton width={120} height={30} /></span>
              </div>
            </ListGroup.Item>
          </div>
  
          

          </div> 

    </div>
  )
}

export default CartSkeleton