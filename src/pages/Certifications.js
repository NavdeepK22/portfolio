import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaUserCircle } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Container fluid className="backwhite">
        <Container className="">
    
        <Row>
      <h1 className='txtcenter '>
        Certifications
      </h1>
        <Col md={6}>   

         <Card className="noborder ">
                  <Card.Body className="borderwh">
                  <Image className='imglinkedcrt'
        src=
"../images/leadership.png"
     
      />

      
                    

                    <Card.Title style={{ color: "white" }}>
                      <FaUserCircle /> social leadership(LinkedIn Learning)
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                    Certifcate of completeion
        </Card.Subtitle>
        <Button variant="success" 	className='btngreen'
              href="https://www.linkedin.com/learning/certificates/48b5b3051f538aeadfd09301619c5c788ed5558a064a7f180bb684e3f3cbcf1a?u=2175986">Know More</Button>{' '}
           
       

                  </Card.Body>
                </Card>   
    
                        
          
             

        </Col>
        <Col md={6}>    
        <Card className="noborder">
                  <Card.Body className="borderwh">
                  <Image className='imglinkedcrt'
        src=
"../images/leadership.png"
     
      />

      
                    

                    <Card.Title style={{ color: "white" }}>
                      <FaUserCircle /> social leadership(LinkedIn Learning)
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                    Certifcate of completeion
        </Card.Subtitle>
        <Button variant="success" 	className='btngreen'
              href="https://www.linkedin.com/learning/certificates/48b5b3051f538aeadfd09301619c5c788ed5558a064a7f180bb684e3f3cbcf1a?u=2175986">Know More</Button>{' '}
           
       

                  </Card.Body>
                </Card>   
    
    </Col>
    
      </Row>
         
          </Container>
      </Container>

    </>
  );
}
