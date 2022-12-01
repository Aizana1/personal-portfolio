import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/faig-1.png";
import projImg2 from "../assets/img/easy-teaching-1.png";
import projImg3 from "../assets/img/shelter.png";
import projImg4 from "../assets/img/chess.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Travelling website",
      description: "WebSite for a Georgian Tour Guide",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Interactive platform for teaching and studying languages",
      imgUrl: projImg2,
    },
    {
      title: "Informational Website",
      description: "Website which unites local shelters to help people adopt stray dogs and cats",
      imgUrl: projImg3,
    }
  ];
  const petProjects = [
    {
      title: "Chess",
      description: "Chess game on React",
      imgUrl: projImg4,
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  I've got both freelance and corporate experience as a Frontend Developer.
                  All source codes can be found on my GitHub account, except corporate code due to Confidentiality and Non-disclosure Agreement
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Freelance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Corporate</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Pet-projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                      My latest company was Tensor Ltd. where I worked for a year. It's a product company which main product is SBIS or Saby in English version. 
                      I worked in the team which was responsible for web-messenger.
                      Out UI Component was used in Discussions, Chats and Corporate Emails.
                      I developed new features, worked on optimization and interacted with backend/frontend teammates,designers, PM and QAs.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          petProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
