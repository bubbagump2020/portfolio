import React from 'react'
import { Container, Col, Row } from 'shards-react'
import '../styling/projects.scss'

const Projects = () => {
    return(
        <Container className={`projects`}>
            <Row>
                <Col>
                    <h4>Flatiron Projects</h4>
                    <Row>
                        <Col>
                            <h5>
                                <a href="https://github.com/RichardPitts1/uDoc">uDoc</a>
                            </h5>
                            <p>
                                First Flatiron Project. Coded in Ruby. I was responsible for the back end of the project. Particularly proud of the filtering code that I wrote.
                            </p>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            <h5>
                                <a href="https://github.com/bubbagump2020/poolie">Poolie</a>
                            </h5>
                            <p>
                                Third Flatiron project. Coded in Rails and vanilla JavaScript. I was responsible for the back end of this project as well.
                            </p>
                            <p>
                                Proud of the fact that I was able to get a working version of live chat running using Active Cable
                            </p>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            <h5>
                                <a href="https://github.com/bubbagump2020/lhtgr">LHTGR</a>
                            </h5>
                            <p>
                                Capstone Project
                            </p>
                            <p>
                                Rails back end, ReactJS front end with Redux.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row><br></br>
            <Row>
                <Col>
                    <h4>Personal Projects</h4><br></br>
                    <Row>
                        <Col>
                            <h5>
                               <a href="https://github.com/bubbagump2020/diabeticTrackingApp">Diabetic Tracker</a>
                            </h5>
                            <p>
                                A CLI app coded in C++ that allows a user to track their weight, blood sugars, and blood pressure.
                            </p>
                            <p>
                                It spits out a .txt file which is then re-used every time a user uses the app. If there is no .txt file, a new one is created.
                            </p>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            <h5>
                                <a href="http://interactive-periodic-table.appspot.com/">Interactive Periodic Table</a>
                            </h5>
                            <p>
                                A interactive periodic table. Click the elements to see more!
                            </p>
                            <p>This project was coded entirely in ReactJS JavaScript</p>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            <h5>
                                <a href="https://peaceful-meadow-93545.herokuapp.com">Recip-Ease</a>
                            </h5>
                            <p>
                                An online cookbook meant to hold your favorite recipes!
                            </p>
                            <p>
                                This project has a Ruby on Rails back end and ReactJS front end that also utilized React-Redux. PostgreSQL was the database of choice for this project.
                            </p>
                        </Col>
                    </Row>
                </Col> 
            </Row>
        </Container>
    )
}

export default Projects