import React from 'react'
import { Container, Row, Col } from 'shards-react'
import Dogs from '../../assets/photos/rue_ginger.png'
import '../styling/summaries.scss'

export const PersonalSummary = () => {
    return(
        <Container className="personal-summary">
            <Row>
                <Col>
                    <h4>
                        All about me!
                    </h4><br></br>
                    <div id="dog-owner">
                        <h6>Dog Dad</h6>
                        <p>
                            Where to start? I am a junior full stack developer located in Sugar Land, Texas near Houston. I have two dogs, a German Shepherd-Husky mix by the name of Rue
                            and a Red Doberman who answers to Ginger.
                        </p>
                    </div>
                    <Row className="image">
                        <Col>
                            <img src={Dogs} alt="Rue and Ginger"/>
                            <p>Rue and Ginger</p>
                        </Col>
                    </Row>
                    <div id="gamer">
                        <h6>Gamer</h6>
                        <p>
                            I am an avid gamer who enjoys not just video games but table top, board, pen and pencil, and many more.
                            I was introduced to gaming thanks to having strabismus when I was a kid (strabismus is medical speak for when your eyes don't work together as a team).
                            While being treated for this the ophthalmologist noticed that my eyes would track together whenever I was watching something on a screen. They recommended to my parents
                            that in order to fix my eyes I was to play video games for several hours each day. I have kept to that recommendation faithfully since then.
                        </p>
                    </div>
                    <div id="service">
                        <h6>Service before Self</h6>
                        <p>
                            I've been taught to embody the maxim "Service before Self" since I was a Cub Scout all those years ago. Whether it was the food and clothing drives of my Cub Scout pack and 
                            Boy Scout troop, to volunteer work while in high school and college, and finally to becoming a care taker for a sick dad, I have striven to meet this standard.
                        </p>
                    </div>
                    <div id="try">
                        <h6>I Will Try (and Do)</h6>
                        <p>
                            I Will Try is the Norwich University motto. It's as simple but powerful motto. No matter how difficult or trivial the task may be,
                            I will try to complete it to the best of my ability. As a Rook and later a cadet I was introduced to the unofficial cadet version "I will not try, I will do." Again
                            a simple but powerful motto to live by. I will not just try to complete the task to the best of my ability, but I <i>will</i> do so.
                        </p>
                    </div>
                    <div id="integrity">
                        <h6>Integrity</h6>
                        <p>
                            "I will not lie, cheat, steal, or tolerate those who do."
                        </p>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export const ProfessionalSummary = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h5>
                        Hi! My name is Kevin. Thanks for visiting my portfolio site.
                    </h5>
                    <p>
                        I've had quite the journey to becoming a full stack developer. I graduated from Lamar Consolidated High School in Rosenberg, TX in May 2009. Later that year I attended Norwich University in Northfield, VT where I 
                        was accepted into the Studies in War and Peace academic program, which was centered around conflict resolution and multi-disciplinary skill development that included language studies, history, political science, philosophy, and economics.
                        During my time at Norwich, I joined the Norwich University Corps of Cadets and completed Rook Training, a program that takes the entire freshman year and covers time management, military customs and courtesies, physical fitness, effective communication, initiative, and other leadership skills. During that training I ended up breaking my nose
                        and was disqualified from the more physical extra-curricular clubs and ended up joining the student chapter of the Association for Computing Machinery.
                    </p>
                    <p>
                        It was here where I discovered my joy of computers. I learned the different pieces of computer hardware and their uses and how to use that knowledge to build custom computers and servers. As I was a liberal arts major and not a computer science major, I couldn't
                        contribute to the student coding projects, but it sparked my interest in coding. I left Norwich University in May 2011 for two primary reasons, my father's illness was worsening and financial issues. When I returned home in May 2011 I became a full time care taker for my father,
                        a job that lasted until his death in January 2018.
                    </p>
                    <p>
                        During that time I went back to school and obtained an Associate's of Science in Computer Science from Houston Community College in July 2015. Now the plan was to immediately enter the University of Houston later that year and to pursue (and complete) a Bachelor's in Computer Science, but life likes to intervene.
                        Almost immediately after my graduation, Dad contracted double pneumonia thanks to a weakened immune system caused by diabetes. The last half of 2015 and the better part of 2016 was spent nursing him back to health and trying to straighten out some financial aid issues.
                    </p>
                    <p>
                        In October 2016 I was hired as a network operator by Fugro Satellite Positioning, Inc., later Fugro USA Marine, Inc. due to an internal corporate re-shuffle. A bit of background on FSPI, they develop their own, highly accurate, GNSS positioning solutions by tracking the major GNSS constellations like GPS and GLONASS which they
                        then sold to both public and private actors. As a network operator, I, well, operated the network. The health and accuracy of the data coming in from Fugro remote operating stations, the commercial communications satellites which broadcast the postioning solution, as well as the GNSS satellites themselves was monitored.
                        The monitoring software used was both commercial solutions such as JIRA for major issues such as standing up a new remote station and Grafana for realtime monitoring, as well as in-house solutions created by Fugro software engineers. The operator had
                        operational control of production systems and could turn off, on, or move broadcasts at their whim.
                    </p>
                    <p>
                        I left Fugro in August 2018 due to an inability to maintain the 7-7 shift schedule required for the position (What 7-7 means is 7 a.m. to 7 p.m. for seven days, Monday to Sunday. A week off then 7 p.m. to 7 a.m. for seven days). Between August 2018 and August 2019 I job hunted unsuccessfully.
                    </p>
                    <p>
                        August 2019 was a great turning point. I applied and was accepted into the Flatiron School's Software Engineering coding boot camp which provided a refresher on the topics that I had learned at HCC as well as learning new ideas. It was here that I was introduced to Ruby on Rails, JavaScript, ReactJS and Heroku to name a few.
                        To see my Flatiron projects as well as what I have done since my graduation in November 2019, click the Projects tab above.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}