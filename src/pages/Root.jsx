import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useStore from "../store/cartStore";
import { Badge } from "react-bootstrap";
import { useState } from "react";
export default function Root(){
    const { cart } = useStore((state) => ({
        cart: state.cart,
      }));
      const [search,setSearch]=useState(false)
    return(
        <div>
            <header>
            <Navbar collapseOnSelect expand="lg" className=" fixed-top mb-5" style={{backgroundColor:"#88f397"}} >
      <Container>
        <Navbar.Brand style={{fontSize:20,fontWeight:500}}  as={Link} to="/" >Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
          </Nav>
          <Nav>
            <Nav.Link  style={{fontSize:20,}}  className="active " >Sign up</Nav.Link>
           { search? <Nav.Link   className="active " > <input style={{fontSize:15,height:25,marginTop:4}}  type="text" placeholder="search"  /> </Nav.Link> :null}
            
            <Nav.Link ><i style={{fontSize:20,fontWeight:800}}  class="bi bi-search" onClick={()=>setSearch(!search)} ></i></Nav.Link>
              
            <Nav.Link as={Link} to="/cart">
          <span as > <i style={{fontSize:20,fontWeight:800}} className="bi bi-cart3 "></i> <sup className="mt-0 h-3" > <Badge style={{fontSize:10,}} bg="danger" >{cart.length}</Badge>  </sup> </span> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </header>
            <div >
            <Outlet/>

            </div>
            
            <footer className="mt-3 p-4 " style={{backgroundColor:"#88f397"}}  >

            </footer>
        </div>
    )
}












