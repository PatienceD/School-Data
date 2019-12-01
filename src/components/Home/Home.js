import React from "react";
import "./style.css";
import data from "./img/data.PNG";
import lefttopic from "./img/left-topic.png";
import midtopic from "./img/mid-topic.png";
import righttopic from "./img/right-topic.png";


function Home() {
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
            <div className="row">
                <div className="col-lg-12">
                    <div className="jumbotron">
                        <h1 className="display-4">Hello!</h1>
                        <p className="lead">This is a informative website that shows different school data using the <a href="https://www.data.gov" target="_blank">api.data.gov</a> website.</p>
                        <hr className="my-4"></hr>
                        <p>Each schools information is called using an axios get method and displayed in different forms of charts.
                            You also have the option to print the page, download the api data as a text file, or save the page as a pdf.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h1>About The Api used </h1>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={data} alt="logo"></img>
                                    </div>
                                </div><hr></hr>
                                <div className="row" id="api-info">
                                    <h3>The home of the U.S. Government's open data.</h3>
                                    <p>Here you will find data, tools, and resources to conduct research, develop web and mobile applications, design data visualizations, and more.
                                        Data.gov is managed and hosted by the U.S General Services Administration, while being powered by two open source applications, CKAN and WordPress,
                                        and is developed publicly on GitHub.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>Data.gov Covers these Topics</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row" id="topics-info">
                                <div className="col-md-3">
                                    <img src={lefttopic} alt="left"></img>
                                </div>
                                <div className="col-md-4">
                                    <img src={midtopic} alt="left"></img>
                                </div>
                                <div className="col-md-4">
                                    <img src={righttopic} alt="left"></img>
                                </div>
                            </div>
                            <div className="row" id="basic-info-1">
                                <div className="col-sm-12">
                                    <p>Open government data is important because the more accessible, discoverable, and usable data is, the more impact it can have.
                                        These impacts include, but are not limited to: cost savings, efficiency, fuel for business, improved civic services, informed policy,
                                        performance planning, research and scientific discoveries, transparency and accountability, and increased public participation in the
                                        democratic dialogue.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>API Information</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row" id="basic-info-2">
                                <div className="col-lg-12">
                                    <p>Data.gov doesn’t just catalog raw data, it also includes APIs from across government. You can browse the current catalog for APIs,
                                        but expect this listing to grow as agencies include more of their APIs as part of their data.json metadata in Project Open Data.</p>
                                    <p>Learn More about data.gov</p>
                                    <a href="https://www.data.gov/" target="_blank"><button className="btn btn-outline-success my-2 my-sm-0" type="button">More Info</button></a>

                                </div>
                            </div>
                            <p id="disclaimer">All information displayed comes directly from the data.gov website</p>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
            </div>
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
                            <a href="#" target="_blank"><li><i class="fab fa-github-square"></i></li></a>
                            <a href="#" target="_blank"><li><i class="fab fa-linkedin"></i></li></a>
                            <a href="#" target="_blank"><li><i class="fab fa-facebook-square"></i></li></a>
                            <a href="#" target="_blank"><li><i class="fab fa-twitter-square"></i></li></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Home;