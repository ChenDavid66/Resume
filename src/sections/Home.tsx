import React from 'react'
import Container from 'react-bootstrap/Container'
import Avatar from '../images/avatar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import ParticlesContainer from '../components/ParticlesContainer'
import TextLoop from "react-text-loop"

export class Home extends React.Component {
  render() {
    return (
      <section id="home" className="home d-flex align-items-center">
        <ParticlesContainer />
        <Container>
          <div className="intro">
            <img src={Avatar} alt="kien dang" className="mb-4" />

            <h1 className="mb-2 mt-0">kien.dang</h1>

            <span>
              I'm a
              {" "}
              <TextLoop springConfig={{ stiffness: 180, damping: 10 }} interval={2000}>
                <span>Microsoft .NET developer</span>
                <span>Front-End developer</span>
                <span>Data scientist</span>
              </TextLoop>
            </span>

            <ul className="social-icons light list-inline mb-0 mt-4">
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={["fab", "github"]} /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={["fab", "instagram"]} /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={["fab", "pinterest"]} /></a></li>
            </ul>

            <div className="mt-4">
              <Button variant="kd">Contact me</Button>
            </div>
          </div>
          <div className="scroll-down">
            <a href="#about" className="mouse-wrapper">
              <span>Scroll Down</span>
              <span className="mouse">
                <span className="wheel"></span>
              </span>
            </a>
          </div>
        </Container>
      </section>
    )
  }
}

export default Home