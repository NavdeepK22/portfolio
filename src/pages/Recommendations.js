import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaUserCircle } from "react-icons/fa";
import Image from "react-bootstrap/Image";

export default function Home() {
  return (
    <>
      <div className="backgroundbl">
        <Container fluid className=" margncontainer  ">
          <Container className=" ">
            <Row>
              <Col xs={6} md={6} lg={6}>
                <Card className="backgroundbl">
                  <Card.Body className="borderwh">
                    <Card.Text>
                      <Image
                        className=" info-recomm commas-up"
                        src="./images/comma.png"
                      />
                      Energetic and curiosity-driven Mobile app developer with
                      5+ years of experience writing top-quality clean code for
                      high-paced businesses. Possess demonstrable ability to
                      cultivate relationships with different stakeholders within
                      an organization with empathetic communication skills and a
                      penchant for solving problems. Eager to support your
                      organization in modernizing its world-class products and
                      delivering an incredible user experience.
                    </Card.Text>

                    <Card.Title style={{ color: "white" }}>
                      <FaUserCircle /> Natasha Agrewal, Technical Lead
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={6} lg={6}>
                <Card className="backgroundbl">
                  <Card.Body className="borderwh">
                    <Card.Text>
                      <Image
                        className=" info-recomm commas-up"
                        src="./images/comma.png"
                      />
                      Energetic and curiosity-driven Mobile app developer with
                      5+ years of experience writing top-quality clean code for
                      high-paced businesses. Possess demonstrable ability to
                      cultivate relationships with different stakeholders within
                      an organization with empathetic communication skills and a
                      penchant for solving problems. Eager to support your
                      organization in modernizing its world-class products and
                      delivering an incredible user experience.
                    </Card.Text>

                    <Card.Title style={{ color: "white" }}>
                      <FaUserCircle /> Natasha Agrewal, Technical Lead
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="backgroundbl">
          <Container className="">
            <Row>
              <Col xs={6} md={6} lg={6}>
                <Card className="backgroundbl">
                  <Card.Body className="borderwh">
                    <Card.Text>
                      <Image
                        className=" info-recomm commas-up"
                        src="./images/comma.png"
                      />
                      Energetic and curiosity-driven Mobile app developer with
                      5+ years of experience writing top-quality clean code for
                      high-paced businesses. Possess demonstrable ability to
                      cultivate relationships with different stakeholders within
                      an organization with empathetic communication skills and a
                      penchant for solving problems. Eager to support your
                      organization in modernizing its world-class products and
                      delivering an incredible user experience.
                    </Card.Text>

                    <Card.Title style={{ color: "white" }}>
                      <FaUserCircle /> Natasha Agrewal, Technical Lead
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={6} lg={6}>
                <Card className="backgroundbl">
                  <Card.Body className="borderwh">
                    <Card.Text>
                      <Image
                        className=" info-recomm commas-up"
                        src="./images/comma.png"
                      />
                      Energetic and curiosity-driven Mobile app developer with
                      5+ years of experience writing top-quality clean code for
                      high-paced businesses. Possess demonstrable ability to
                      cultivate relationships with different stakeholders within
                      an organization with empathetic communication skills and a
                      penchant for solving problems. Eager to support your
                      organization in modernizing its world-class products and
                      delivering an incredible user experience.
                    </Card.Text>

                    <Card.Title style={{ color: "white" }}>
                      <FaUserCircle /> Natasha Agrewal, Technical Lead
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}
