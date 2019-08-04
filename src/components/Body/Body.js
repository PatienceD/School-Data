import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Polar } from 'react-chartjs-2';
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

    componentDidMount() {
        this.SchoolName();
    }


    SchoolName() {
        axios
            .get(apiURL)
            .then(response => {
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

                })
                console.log(response.data.results[0].latest.student.demographics.race_ethnicity.black)
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
                "Biological"
            ],
            datasets: [{
                data: [this.state.Math, this.state.Psychology, this.state.Communication, this.state.Health, this.state.Biological],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    "#009900",
                    '#000066'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#009900',
                    '#000066'
                ]
            }]
        };        


        const { error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="jumbotron" style={{ marginTop: "25px" }}>
                            <h2 className="display-4">{this.state.Name}</h2>
                            <p className="lead">Location: {this.state.Address}</p>
                            <p>Current Alias: No Current Alias</p>
                            <p>Student Count:</p>
                            <hr className="my-4"></hr>
                            <p>"The primary purpose of the University of Wisconsin–Madison is to provide a learning environment in which faculty,
                                staff and students can discover, examine critically, preserve and transmit the knowledge, wisdom and values that
                        will help ensure the survival of this and future generations and improve the quality of life for all."</p>
                            <a className="btn btn-lg" href={this.state.URL} role="button" rel="noopener noreferrer" style={{ backgroundColor: "#DAA520" }} target="_blank">Check out their website</a>
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
                                    <h4 style={{ textAlign: "center" }}>Ethicity at UOW</h4>
                                    <Doughnut data={EthicityData} />

                                </div>
                            </div>
                        </div>
                    </div><br></br>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ textAlign: "center" }}>This is the title</h4>
                                    <Polar data={PolarData} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="button" className="btn" style={{ backgroundColor: "#DAA520" }}>Save Page as a PDF</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="button" className="btn" style={{ backgroundColor: "#DAA520" }}>Download</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="button" className="btn" style={{ backgroundColor: "#DAA520" }}>Print</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br></br>
                </div>
            )
        }
    }
}


const PolarData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
    ]
};

export default School;