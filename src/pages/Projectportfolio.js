import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Container fluid className="backwhite">
        <Container className="">
          <Row>
		  <h1 className='h1center'>
       Project Portflio
      </h1>      
	  <span className="scentre">Here are some examples of my work..</span>
          <Col xs={6} md={6} lg={6}>
              <Card className="noborder">
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                  RoundO
                  </Card.Title>
                  <Card.Text className="widthtxt">
                  RoundO is built to provide the latest resume which can be edited in real-time and could be shared with employers in no time. Users can fill in all the details required for a resume in a given format and can send the latest resume with a single click. Gone are the days when you have to carry a word or PDF file and then attach them to an email to send it to any employer.
                  </Card.Text>
                  <Button className="viewbtn" variant="warning">View Project <FaHeart/></Button>{' '}
        
                </Card.Body>
              </Card>
            </Col>
			<Col xs={6} md={6} lg={6}>
              <Image className="portimg" src="../images/1.png" />
            </Col>
          </Row>

          </Container>
      </Container>
      <Container fluid className="backwhite">
        <Container className=" ">
          <Row>
		  <Col xs={6} md={6} lg={6}>
              <Image className="portimg"  src="../images/2.png" />
            </Col>
            <Col xs={6} md={6} lg={6}>
              <Card className="noborder" >
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                  Georgian Connect
                  </Card.Title>
                  <Card.Text className="widthtxt">
                  The aim of this project is to enable students to find other Georgian students on the basis, of course, location, interests, hometown etc. Students will be able to find other students who are pursuing the same course (senior/junior or classmates) as well as students with the same interests, same location, or hometown from other courses as well
                  </Card.Text>
                  <Button className="viewbtn2" variant="primary">View Project <FaHeart/></Button>{' '}
                </Card.Body>
              </Card>
            </Col>
			
          </Row>
          </Container>
      </Container>
	  <Container fluid className="backwhite">
        <Container className=" ">
          <Row>
		 
            <Col xs={6} md={6} lg={6}>
              <Card className="noborder">
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                  G1 Smart Test- Android App
                  </Card.Title>
                  <Card.Text className="widthtxt">
                  This project will enable Android users to practice Ontario’s G1 driving test according to the latest test guidelines and questionnaire. This app provides all the information required to clear the G1 driving test such as Traffic rules and Road signs
                  </Card.Text>
                  <Button className="viewbtn" variant="warning">View Project <FaHeart/></Button>{' '}
        
                </Card.Body>
              </Card>
            </Col>
			<Col xs={6} md={6} lg={6}>
              <Image className="portimg"  src="../images/3.png" />
            </Col>
          </Row>

          <Button className="viewbtn2" variant="primary">View Project <FaHeart/></Button>{' '}
          </Container>
      </Container>

    </>
  );
}
