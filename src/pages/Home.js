import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";
import Marquee from 'react-double-marquee';

export default function Home() {
  return (
    <>
      <Container fluid>
        <Container className="bg-banner margncontainer">
          <Row className="margint">
            <Col xs={6} md={6} lg={6}>
              <Image className="imglinked img-round-header aos-init aos-animate" src="../images/simar.jpg" />
            </Col>
            <Col xs={6} md={6} lg={6}>
              <Card className="noborder">
                <Card.Body className=""  style={{ backgroundColor: "black" }}>
              

                  <Card.Title className="desh1" style={{ color: "white" }}>
                    Simranjeet Singh
                  </Card.Title>
              
                  <Card.Text className="widthtxt" style={{ color: "#9C9C9C"  }} >
                    Energetic and curiosity-driven Mobile app developer with 5+
                    years of experience writing top-quality clean code for
                    high-paced businesses. Possess demonstrable ability to
                    cultivate relationships with different stakeholders within
                    an organization with empathetic communication skills and a
                    penchant for solving problems. Eager to support your
                    organization in modernizing its world-class products and
                    delivering an incredible user experience.
                  </Card.Text>
                  <Button className="btnhire" variant="success">Hire Me  <FaHeart />  </Button>{" "}
                  
                  <div  className="clrw"  style={{width: '75%', whiteSpace: 'nowrap',
      
      }}
    >
      <Marquee >
      Android Java Flutter React-Native iOS UX Design Software Engineer KPIs text
      </Marquee>
    </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>


   
      <Container fluid className="backwhite">
    
        <Container className="margint ">
        <h1 className='centertext'>
        Work experience
      </h1>
          <Row>
         
            <Col xs={6} md={6} lg={6}>
              <Card className="noborder">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                Jan 2023 – Present
        </Card.Subtitle>
                  <Card.Title style={{ color: "black" }}>
                  Senior Software Developer, Local Security
                  </Card.Title>
                  <Card.Text className="widthtxt">
                  At Local Security, I am responsible to develop new features for Integrator and customer mobile applications in Flutter framework, along with serverless backend development using AWS amplify.

Skills Practiced: Android, Java, Kotlin, Flutter, AWS Amplify, NodeJS, MongoDB
                  </Card.Text>
            
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={6} lg={6}>
              
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="backwhite" >
        <Container className="margint ">
          <Row>
            <Col xs={6} md={6} lg={6}>
             
            </Col>
            <Col xs={6} md={6} lg={6}>
              <Card className="noborder">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                April 2019 – June 2020
        </Card.Subtitle>
                  <Card.Title style={{ color: "black" }}>
                  Android Developer, Snowflakes
                  </Card.Title>
                  <Card.Text className="widthtxt">
                  For this role at Snowflakes, I handled native as well as a hybrid mobile applications. I got a chance to have calls with clients directly to discuss the problem statements and provided solutions to them. Along with this I was responsible to publish Android apps to playstore.

Skills Practiced: Android, Java, Kotlin, Flutter 
                  </Card.Text>
               
           
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="backwhite">
        <Container className="margint">
          <Row>
         
            <Col xs={6} md={6} lg={6}>
              <Card className="noborder">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                Jan 2023 - Present
        </Card.Subtitle>
                  <Card.Title style={{ color: "black" }}>
                  Senior Mobile Developer
                  </Card.Title>
                  <Card.Text className="widthtxt">
                  At MPHRx, I was responsible for managing the phlebotomist app modules. I worked with Executives & Managers from the development team, business team and solution engineering team to deploy the solution on their end. For any technical, product or QA support, I acted as the first point of contact to provide a resolution to their queries. As a part of the mobile team, I regularly did research to streamline the development process and provided POC for the latest developments to the respective manager. 

Skills Practiced: Android, Java, Kotlin, React-Native, Jira, Bitbucket, Github, CI/CD, MongoDB
                  </Card.Text>
             
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={6} lg={6}>
            
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="backwhite">
        <Container className="margint ">
          <Row>
            <Col xs={6} md={6} lg={6}>
         
            </Col>
            <Col xs={6} md={6} lg={6}>
              <Card className="noborder">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                April 2019 – June 2020
        </Card.Subtitle>
                  <Card.Title style={{ color: "black" }}>
                  Android Developer, Snowflakes
                  </Card.Title>
                  <Card.Text className="widthtxt">
                  For this role at Snowflakes, I handled native as well as a hybrid mobile applications. I got a chance to have calls with clients directly to discuss the problem statements and provided solutions to them. Along with this I was responsible to publish Android apps to playstore.

Skills Practiced: Android, Java, Kotlin, Flutter 
                  </Card.Text>
          
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="backwhite">
        <Container className="margint ">
          <Row>
          
            <Col xs={6} md={6} lg={6}>

              <Card className="noborder">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                March 2017 – April 2019
        </Card.Subtitle>
                  <Card.Title style={{ color: "black" }}>
                  Android Developer, Netgains
                  </Card.Title>
                  <Card.Text className="widthtxt">
                  At Netgains, I was responsible for developing android apps as full stack developer. I managed to develop complete mobile applications including RESTful API development to connect android app with server. Furthermore, I got an opportunity to mentor trainees.

Skills Practiced: Java, Kotlin, Android, IOT Devices, Wordpress, PHP, RESTapi development.
                  </Card.Text>
          
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={6} lg={6}>
              
            </Col>
          </Row>
        </Container>
      </Container>

      
   
      <Container fluid className="backblks">
    
        <Container className="margint ">
        <h1 className='centertext'>
        Education
      </h1>
          <Row>
         
            <Col xs={6} md={6} lg={6}>
              <Card className="noborder bdyblk leftd">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                May 2022 – December 202
        </Card.Subtitle>
                  <Card.Title style={{ color: "white" }}>
                  Georgian College
                  </Card.Title>
                  <Card.Text>
                  Post Graduate Certificate, Mobile application development
        </Card.Text>

            
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={6} lg={6}>
            <Card className="noborder bdyblk rightd">
                <Card.Body className="">
                <Card.Subtitle className="mb-2 text-muted">
                August 2013- July 2017
        </Card.Subtitle>
                  <Card.Title style={{ color: "white" }}>
                  Punjab Technical University
                  </Card.Title>
                  <Card.Text >
                  Bachelor of Computer Science & Engineering
        </Card.Text>

            
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

    
    </>
  );
}
