import ActivityCard from "./Components/ActivityCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import studySvg from "./images/icon-study.svg";
import ProfileCard from "./Components/ProfileCard";
import { TimeProvider } from "./Contexts/TimeContext";
function App() {
    return (
        <div className="App">
            <TimeProvider>
                <Container>
                    <Row>
                        <Col className="centerMobile"  lg={3} md={3} xs={12}>

                            <ProfileCard />{" "}
                        </Col>
                        <Col lg={9} md={9} xs={12}>
                            <Row>
                                <Col className="centerMobile" lg={4} md={4} xs={12}>
                                <ActivityCard title="Work"/>
                                    
                                </Col>
                                <Col className="centerMobile" lg={4} md={4} xs={12}>
                                    <ActivityCard title="Play"/>
                                </Col>
                                <Col className="centerMobile" lg={4} md={4} xs={12}>
                                    <ActivityCard title="Study"/>
                                </Col>
                            </Row>
                            <Row className="lower">
                                <Col className="centerMobile" lg={4} md={4} xs={12}>
                                <ActivityCard title="Exercise"/>
                                </Col>
                                <Col className="centerMobile" lg={4} md={4} xs={12}>
                                <ActivityCard title="Social"/>
                                </Col>
                                <Col className="centerMobile" lg={4} md={4} xs={12}>
                                <ActivityCard title="Self Care"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </TimeProvider>
        </div>
    );
}

export default App;
