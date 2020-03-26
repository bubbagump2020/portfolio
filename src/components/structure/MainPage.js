import React from 'react'
import { Container, Row, Col } from 'shards-react'


const MainPage = () => {

    return (
        <Container>
            <Row>
                <Col sm={{size: 10, order: 2 }}>
                   <h3>
                       Kevin Bagnall, a Full Stack Developer
                   </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style={{ fontSize: 20 }}>
                        A fledgling junior developer looking for new opportunities and challenges
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                        <p>
                            Hi, Welcome to my porfolio site. If you want to know more about me, click on the respective tabs above. 
                        </p>
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage