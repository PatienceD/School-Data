import React from "react";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

function NoSchools() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">School Data</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Schools
                             </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/wisconsin">University of Wisconsin</a>
                <a className="dropdown-item" href="/schools">Another School</a>
                <a className="dropdown-item" href="/schools">Some other school</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About the Developer</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>404 Page Not Found <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄 </span></h1>
              <p>Oh no! It looks like that page doesn't exsit.</p>
              <p className="mb-4 pb-2 px-md-5 mx-md-5">For now, why not check out University of Wisconsin?</p>
              <h1>
                <a className="btn" href="/wisconsin" role="button" style={{ backgroundColor: "#DAA520" }}><i className="fas fa-clone left"></i> Click Me!</a>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <footer>
        <div className="row">
          <div className="col-md-4">
            <h1>Data.gov</h1>
            <hr></hr>
            <h3>Learn more about data.gov.</h3>
            <ul>
              <a href="https://www.data.gov/" target="_blank"><li>Data.gov</li></a>
              <a href="https://www.data.gov/impact/" target="_blank"><li>Impact</li></a>
              <a href="https://www.data.gov/applications" target="_blank"><li>Applications</li></a>
              <a href="https://www.data.gov/developers/" target="_blank"><li>Developers</li></a>
              <a href="https://www.data.gov/contact" target="_blank"><li>Contact</li></a>
            </ul>
          </div>
          <div className="col-md-4">
            <h1>Quick Access to Schools</h1>
            <hr></hr>
            <h3>Learn more about each school.</h3>
            <ul>
              <a href="/wisconsin" target="_blank"><li>University of Wisconsin-Madison</li></a>
              <a href="#" target="_blank"><li>To be determined</li></a>
              <a href="#" target="_blank"><li>To be determined</li></a>
              <a href="#" target="_blank"><li>To be determined</li></a>
              <a href="#" target="_blank"><li>To be determined</li></a>
            </ul>
          </div>
          <div className="col-md-4">
            <h1>Contact</h1>
            <hr></hr>
            <h4>patience.deaton2@outlook.com</h4>
            <div className="row">
              <a href="#" target="_blank"><li><i className="fab fa-github-square"></i></li></a>
              <a href="#" target="_blank"><li><i className="fab fa-linkedin"></i></li></a>
              <a href="#" target="_blank"><li><i className="fab fa-facebook-square"></i></li></a>
              <a href="#" target="_blank"><li><i className="fab fa-twitter-square"></i></li></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NoSchools;