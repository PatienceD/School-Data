import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Logo from "./logo/mwlogo.png"

var apiData;
var axios = require("axios");
let apiURL =
    "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=mkIYGU6R65A5fNgNLr2uaaywY4pEEuhDGkyt0oDG";


class School extends Component {
    constructor(props) {
        super(props);
        this.state = { schoolName: " " };
        this.state = {
            Charts: []
        }
    }

    downloadTxtFile = () => {
        console.log(apiData);
        console.log("clicked :)");
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(apiData, null, 2)], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    printDocument() {
        // const input = document.getElementById("divToPrint");
        html2canvas(document.body)
            .then((canvas) => {
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF({ orientation: 'l', format: 'a0' });
                pdf.addImage(imgData, 'JPEG', 110, 0, 970, 840);
                pdf.save("download.pdf");
            });
    }

    componentDidMount() {
        this.SchoolName();
    }


    SchoolName() {
        axios
            .get(apiURL)
            .then(response => {
                apiData = response;
                this.setState({
                    Name: response.data.results[0].school.name,
                    Address: response.data.results[0].school.city + " " + response.data.results[0].school.state + " " + response.data.results[0].school.zip,
                    Students: response.data.results[0].school.alias,
                    URL: response.data.results[0].school.school_url,
                    Black: response.data.results[0].latest.student.demographics.race_ethnicity.black,
                    Asian: response.data.results[0].latest.student.demographics.race_ethnicity.asian,
                    White: response.data.results[0].latest.student.demographics.race_ethnicity.white,
                    Hispanic: response.data.results[0].latest.student.demographics.race_ethnicity.hispanic,
                    Math: response.data.results[0].latest.academics.program_percentage.mathematics,
                    Psychology: response.data.results[0].latest.academics.program_percentage.psychology,
                    Communication: response.data.results[0].latest.academics.program_percentage.communication,
                    Health: response.data.results[0].latest.academics.program_percentage.health,
                    Biological: response.data.results[0].latest.academics.program_percentage.biological,
                    BusinessMarketing: response.data.results[0].latest.academics.program_percentage.business_marketing,
                    Language: response.data.results[0].latest.academics.program_percentage.language,
                    Average: response.data.results[0].latest.admissions.sat_scores.average.overall,
                    MidMath: response.data.results[0].latest.admissions.sat_scores.midpoint.math,
                    MidWriting: response.data.results[0].latest.admissions.sat_scores.midpoint.writing,
                    MidReading: response.data.results[0].latest.admissions.sat_scores.midpoint.critical_reading,
                })
            })
            .catch(error => {
                console.log("Error on request");
            });
    }


    render() {
        const EthicityData = {
            labels: [
                'Black',
                'Asian',
                'White',
                'Hispanic'
            ],
            datasets: [{
                data: [this.state.Black, this.state.Asian, this.state.White, this.state.Hispanic],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#009900'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#009900'
                ]
            }]
        };

        const ProgramData = {
            labels: [
                'Mathematics',
                'Psychology',
                'Communication',
                'Health',
                "Biological",
                "Business Marketing",
                "Language"
            ],
            datasets: [{
                data: [this.state.Math, this.state.Psychology, this.state.Communication, this.state.Health, this.state.Biological,
                this.state.BusinessMarketing, this.state.Language],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    "#009900",
                    '#000066',
                    '#cc0099',
                    "#663300"
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#009900',
                    '#000066',
                    '#cc0099',
                    "#663300"
                ]
            }]
        };

        const HorData = {
            labels: ['Average', 'Mid Point for Math', 'Mid Point for Writing', 'Mid Point for Reading'],
            datasets: [
                {
                    label: 'Scores',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [this.state.Average, this.state.MidMath, this.state.MidWriting, this.state.MidReading]
                }
            ]
        };

        const { error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else {
            return (

                <div className="wrapper" id="divToPrint">
                    <nav className="mb-1 navbar navbar-expand-lg danger-color-dark lighten-1" style={{ color: "#fafafa", height: "95px" }}>
                        <h5 className="navbar-brand"> <img src={Logo} alt="logo" height="115"></img>Wisconsin-Madison</h5>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                            aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" style={{ fontSize: "20px" }}>Schools
                        </a>
                                    <div className="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
                                        <a className="dropdown-item" href="/">University of Wisconsin-Madison</a>
                                        <a className="dropdown-item" href="/schools">Up and coming schools!</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="jumbotron" style={{ marginTop: "25px" }}>
                                <h2 className="display-4">{this.state.Name}</h2>
                                <p className="lead">Location: {this.state.Address}</p>
                                <p>Alias: No Current Alias</p>
                                <p>Student Count: 43,820</p>
                                <hr className="my-4"></hr>
                                <p>"The primary purpose of the University of Wisconsin–Madison is to provide a learning environment in which faculty,
                                    staff and students can discover, examine critically, preserve and transmit the knowledge, wisdom and values that
                                    will help ensure the survival of this and future generations and improve the quality of life for all."</p>
                                <a className="btn btn-lg" href={"http://" + this.state.URL} rel="noopener noreferrer" style={{ backgroundColor: "#DAA520" }} target="_blank">Check out their website</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 style={{ textAlign: "center" }}>Academics at UOW</h4>
                                        <Doughnut data={ProgramData} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 style={{ textAlign: "center" }}>SAT Scores for UOW</h4>
                                        <HorizontalBar data={HorData} />
                                    </div>
                                </div>
                            </div>
                        </div><br></br>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 style={{ textAlign: "center" }}>Ethicity at UOW</h4>
                                        <Doughnut data={EthicityData} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button onClick={this.printDocument} type="button" className="btn" style={{ backgroundColor: "#DAA520" }}>Save Page as a PDF</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button onClick={this.downloadTxtFile} type="button" className="btn" style={{ backgroundColor: "#DAA520" }}>Download</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button onClick={() => window.print()} type="button" className="btn" style={{ backgroundColor: "#DAA520" }}>Print</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br></br>
                    </div>
                    <footer className="page-footer font-small teal pt-4 danger-color-dark">
                        <div className="container-fluid text-center text-md-left">
                            <div className="row">
                                <div className="col-md-6 mt-md-0 mt-3">
                                    <h5 className="text-uppercase font-weight-bold">Education Analytics</h5>
                                    <hr></hr>
                                    <p>131 West Wilson Street Suite 200 Madison, WI 53703</p>
                                    <p>(608) 466-4966</p>
                                </div>
                                <hr className="clearfix w-100 d-md-none pb-3"></hr>
                                <div className="col-md-6 mb-md-0 mb-3">
                                    <h5 className="text-uppercase font-weight-bold">Created by: Patience Deaton</h5>
                                    <hr></hr>
                                    <p>Orlando, FL</p>
                                    <p>patience.deaton2@outlook.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-copyright text-center py-3">© 2018 Copyright
                </div>
                    </footer>
                </div>
            )
        }
    }
}



export default School;