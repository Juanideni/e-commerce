import {useEffect, useState } from "react"
import {Link} from 'react-router-dom';
import {Card} from "react-bootstrap"


function Catalogue(props){
    const [items, setItems] = useState([])

useEffect(()=>{
fetch("https://rooftop-api-rest-frontend.herokuapp.com/items")
.then(res => res.json())
.then(
    (res) => {
      setItems(res.items)
  },   
)
}, [])


    return(
        <>
        <div className="api-div">

        <ul className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {
                items.map(item => (
                    <li key="item.id" className="api-li">
                    <Card style={{ width: '18rem', height: '24rem', padding: '5%', border: '2px solid black' }}>
                        <Card.Img variant="top" src={item.images[0]} />
                <Card.Body className="body-card">
                    <Card.Title>
                        <Link to="/Details" onClick={() => props.getId(item.id)}>
                        {item.title}
                        </Link>
                        </Card.Title>
                    <Card.Text>
                        
                    {
                        (item.offer === null) 
                        ? (
                            <h4> 
                                    {item.currency} {item.price} 
                                </h4>
                                ) 
                                :  
                                (
                                    <>
                                <h4 className="old-price"> 
                                    {item.currency} {item.price} 
                                </h4>
                                <h4 className="sale-text"> OFERTA!<br></br>
                                    <span className="sale-text">{item.currency} {item.offer.price}</span>
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

export default Catalogue;