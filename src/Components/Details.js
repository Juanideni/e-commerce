import {useState, useEffect} from "react"
import {Form, Button,FloatingLabel, Modal} from "react-bootstrap"



function Details(props){

    
    const [questions, setQuestions] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    let [opinion, setOpinion] = useState("")
    let [email, setEmail] = useState("")
    

    
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


     function handleOpinion(e){
         setOpinion(e.target.value)
         
     }
     function handleEmail(e){
        setEmail(e.target.value)
     }

     function handleBuy(){
         setLgShow(true)
     }

     const handleSubmit = (e) => {
        e.preventDefault();
         fetch("https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id="+props.id, {
             method: "POST",
             headers: {"Content-type": "application/json"},
             body: JSON.stringify(questions)
            }).then(()=>{
                setSmShow(true)
                
            })
        }

    
     
    return(
        <>
            <div className="details-div">

            {
                
                selectedProduct.map(prod =>(
                    (prod.id === props.id) ?
                    <ul>
                    <li key="prod.id" className="api-li">
                        <div className=" row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 detail-prod"  >
                        <img src={prod.images[0]} className="detail-img" alt=""></img>
                        <h2 className="detail-line">
                                {prod.title} <br></br>
                                    {
                                    (prod.offer === null) ?
                                    <h3 className="real-price">
                                    {prod.currency} {prod.price}
                                    </h3>
                                    :
                                   <>
                                    {
                                            (dayjs(prod.offer.expires_at).year() === 2021) ? 
                                            <>
                                            <h3 className="real-price">
                                            {prod.currency} {prod.price}
                                            </h3>
                                            <h5 className="offer-text">This offer has expired on {dayjs(prod.offer.expires_at).day()} / {dayjs(prod.offer.expires_at).month()} / {dayjs(prod.offer.expires_at).year()}</h5>
                                            </>
                                            :
                                            <>
                                            <h3 className="old-price">
                                            {prod.currency} {prod.price}
                                            </h3>
                                            <h3 className="sale-text"> SALE! - {prod.currency} {prod.offer.price}
                                            </h3>
                                            <h5 className="offer-text"> This offer expires on {dayjs(prod.offer.expires_at).day()} / {dayjs(prod.offer.expires_at).month()} / {dayjs(prod.offer.expires_at).year()}</h5>
                                            </>
                                    }
                                   </>
                                    }
                                    <div className="button-group">
                                        <h5>
                                            Choose your payment method
                                        </h5>
                                        <ul>
                                            <li>
                                            <Button type="radio" variant="outline-primary">Debit card</Button>
                                            </li>
                                            <li>
                                            <Button type="radio" variant="outline-primary">Credit card</Button>
                                            </li>
                                            <li>
                                            <Button type="radio" variant="outline-primary">Bank transfer</Button>
                                            </li>
                                        </ul>
                                    </div>
                                    <Button variant="primary" className="button" onClick={handleBuy}>
                                        Buy it!
                                    </Button>
                                        <Modal
                                            size="lg"
                                            show={lgShow}
                                            onHide={() => setLgShow(false)}
                                            aria-labelledby="example-modal-sizes-title-lg"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-lg">
                                                Thank you for your purchase
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Your product will arrive in a few days 🚚</Modal.Body>
                                        </Modal>

                            </h2>    
                        </div>
                    </li>
                </ul>
                
                :
                ""
                ))
                
                
            }
            <div className="question-div">
            <h1 className="h1-div">
                    Questions about this product... 
            </h1>
            {
                questions.map(question =>(
                    
                <>
                    <ul className="question-ul">
                        <li key="question.id" className="api-li">
                                <strong>Answer:</strong> {question.answer}<br></br>
                                <strong>Question:</strong> {question.question}<br></br> 
                                <strong>Written by:</strong> {question.customer_name}<br></br>
                                <hr></hr>
                        </li>
                    </ul>
                </>
                        
                ))
                        
                    }
            </div>
           
            </div>

            <div className="form-div">
                <h1 className="h1-div">
                    Have a question? 
                </h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={handleEmail}
                    
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    value={opinion}
                    onChange={handleOpinion}
                    required
                    />
                    
                </FloatingLabel>
                <Button variant="primary"  className="button" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Nice! Thank you 🤘
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your question was added!</Modal.Body>
                </Modal>
            </Form>
            </div>

        </>
    )
}
export default Details;