import {Navbar, Nav, Container} from "react-bootstrap"
import "../App.css"


function Bar(){
    return(
      <>
    <Navbar variant="dark" expand="xl" className="bar">
    <Container>
    <img
          alt="Logo"
          src="logo.png"
          width="80"
          height="75"
          className="d-inline-block align-left logo"
          />
    <Navbar.Brand href="/" className="brand">
      e-Market
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end links">
        <Nav.Link className="link" to="/">Home</Nav.Link>
        <Nav.Link className="link" to="/Catalogue">Catalogue</Nav.Link>
  
    </Navbar.Collapse>
  </Container>
</Navbar>
 </>
    )
}
export default Bar;