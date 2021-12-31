import {useEffect, useState } from "react"
import {Card, Carousel} from "react-bootstrap"
function Home(){
 const [articulos, setArticulos] = useState([])

 useEffect(()=>{
    fetch("https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4")
    .then(res => res.json())
    .then(
        (res) => {
          setArticulos(res.items)
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

        <ul className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 g-4">
            {
                articulos.map(articulo => (
                    <li key="articulo.id" className="api-li">
                    <Card style={{ width: '18rem', height: '24rem', padding: '5%', border: '2px solid black' }}>
                        <Card.Img variant="top" src={articulo.images[0]} />
                <Card.Body className="body-card">
                    <Card.Title>{articulo.title}</Card.Title>
                    <Card.Text>
                    {
                        (articulo.offer === null) 
                        ? (
                            <h4> 
                                    {articulo.currency} {articulo.price} 
                                </h4>
                                ) 
                                :  
                                (
                                    <>
                                <h4 className="old-price"> 
                                    {articulo.currency} {articulo.price} 
                                </h4>
                                <h4 className="sale-text"> OFERTA!<br></br>
                                    <span className="sale-text">{articulo.currency} {articulo.offer.price}</span>
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