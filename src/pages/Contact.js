import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import { FaReact } from "react-icons/fa";



import { InlineWidget } from "react-calendly";
export default function Home() {
  return (
    <>
      <Container fluid>
        <Container className="margncontainer bg-banner">
          <Row>
          <Col xs={6} md={6} lg={6}>
              <Card className="noborder widthtxt marg-t">
                <Card.Body className="bckblcon">
                  <Card.Title style={{ color: "#9c9c9c" }}>
				  Get In Touch
                  </Card.Title>
                  <Card.Text  style={{ color: "#9c9c9c" }}>
				  Feel free to contact me directly using below contact details or you can fill the contact form as well.
          <Card.Title style={{ color: "#9c9c9c" }}>
          <FaReact/>info@simranjeet.dev
                  </Card.Title>
                  <Card.Title style={{ color: "#9c9c9c" }}>
                  <FaReact />British Columbia, Canada
                  </Card.Title>
                  </Card.Text>
                
            
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={6} lg={6}>
			<div className="App">
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
    </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
