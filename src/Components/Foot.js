import {Navbar as Footer, Container} from "react-bootstrap"

function Foot(){
  
  let fecha = new Date()
  let año = fecha.getFullYear()
    return(
        <Footer className="foot" variant="dark">
        <Container>
          <Footer.Toggle />
          <Footer.Collapse className="justify-content-center">
            <Footer.Text>
              © Copyright - {año}
            </Footer.Text>
            <Footer.Text>
              
            </Footer.Text>
          </Footer.Collapse>
        </Container>
      </Footer>
    )
}
export default Foot;