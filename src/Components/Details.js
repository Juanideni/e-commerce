import {useState, useEffect} from "react"


function Details(props){
    const [questions, setQuestions] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    
    var dayjs = require('dayjs')
    dayjs().format()

    useEffect(()=>{
    fetch("https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id="+props.id)
    .then(res => res.json())
    .then(
        (res) => {
          setQuestions(res)
      },   
    )
    }, [props.id])
    useEffect(()=>{
        fetch("https://rooftop-api-rest-frontend.herokuapp.com/items")
        .then(res => res.json())
        .then(
            (res) => {
              setSelectedProduct(res.items)
          },   
        )
     }, [])
    return(
        <>
        <h1>
            Product´s details
        </h1>
        <hr></hr>
            <div className="details-div">

            {
                
                selectedProduct.map(prod =>(
                    (prod.id === props.id) ?
                    <ul>
                    <li key="prod.id" className="api-li">
                        <div className=" row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 detail-prod"  >
                        <img src={prod.images[0]} alt=""></img>
                        <h2>
                                {prod.title} <br></br>
                                
                                    
                                    {
                                    (prod.offer === null) ?
                                    <span>
                                    {prod.currency} {prod.price}
                                    </span>
                                    :
                                    <>
                                    <span className="old-price">
                                    {prod.currency} {prod.price}
                                    </span> <br></br>
                                    <span className="sale-text">
                                    {prod.currency} {prod.offer.price}
                                    </span><br></br>
                                    <span>
                                        Esta oferta expira en {prod.offer.expires_at}
                                    </span>
                                    </>
                                    }
                                    

                                
                        </h2>    
                        </div>
                    </li>
                    </ul>
                
                :
                ""
                ))
                
                
            }
            {
                questions.map(question =>(
                    <ul className="question-ul">
                        
                        <li key="question.id" className="api-li">
                                <strong>Question:</strong> {question.question}<br></br> 
                                <strong>Escrito por:</strong> {question.customer_name}<br></br>
                                <strong>Answer:</strong> {question.answer}<br></br>
                                <hr></hr>
                            </li>
                    </ul>
                        
                        ))

            }
            </div>



        </>
    )
}
export default Details;