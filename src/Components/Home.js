/* eslint-disable no-undef */

import {useEffect, useState } from "react"
import {Card, Carousel} from "react-bootstrap"
import {Link} from "react-router-dom"
function Home(props){
 const [products, setProducts] = useState([])

 useEffect(()=>{
    fetch("https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4")
    .then(res => res.json())
    .then(
        (res) => { 
          setProducts(_.shuffle(res.items))
        },   
        )
      }, [])
     
      
 return(
     <>
     <div className="carousel">
     <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="banner_1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="banner_2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="banner_3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
     </div>



    <div className="api-div">
        <ul className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 g-4 api-ul">
            { 
                products.map(product => (
                    
                    <li key="product.id" className="api-li">
                    <Card style={{ width: '18rem', height: '24rem', padding: '5%', border: '2px solid black' }}>
                        <Card.Img variant="top" src={product.images[0]} />
                <Card.Body className="body-card">
                    <Card.Title>
                    <Link to="/Details" onClick={() => props.getId(product.id)}>
                        {product.title}
                        </Link>
                    </Card.Title>
                    <Card.Text>
                    {
                        (product.offer === null) 
                        ? (
                            <h4> 
                                    {product.currency} {product.price} 
                                </h4>
                                ) 
                                :  
                                (
                                    <>
                                <h4 className="old-price"> 
                                    {product.currency} {product.price} 
                                </h4>
                                <h4 className="sale-text"> SALE! <br></br>
                                    <span className="sale-text">{product.currency} {product.offer.price}</span>
                                </h4>
                                </>
                            )
                          
                        } 
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </li>
              
            ))
            
          }
          
        </ul>
    
        </div>
</>
    )
}
export default Home;