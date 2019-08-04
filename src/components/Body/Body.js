import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var axios = require("axios");
let apiURL =
    "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=mkIYGU6R65A5fNgNLr2uaaywY4pEEuhDGkyt0oDG";


/* GET users listing. */
// router.get("/", function (req, res, next) {
//     axios
//         .get(apiURL)
//         .then(response => {
//             res.send(response.data.results[0].school.name);
//         })
//         .catch(error => {
//             res.status(error).send("Error on request");
//         });
// });

class School extends Component {
    constructor(props) {
        super(props);

        this.state = { schoolName: " " };
    }

    componentDidMount() {
        this.SchoolName();
    }



    SchoolName() {
        axios
            .get(apiURL)
            .then(response => {
                    this.setState({
                        Name: response.data.results[0].school.name
                    })
                    console.log(response.data.results[0].school.name);
            })
            .catch(error => {
                console.log("Error on request");
            });
    }




    render() {

        // const options = {
        // 	exportEnabled: true,
        // 	animationEnabled: true,
        // 	title: {
        // 		text: "Website Traffic Sources"
        // 	},
        // 	data: [{
        // 		type: "pie",
        // 		startAngle: 75,
        // 		toolTipContent: "<b>{label}</b>: {y}%",
        // 		showInLegend: "true",
        // 		legendText: "{label}",
        // 		indexLabelFontSize: 16,
        // 		indexLabel: "{label} - {y}%",
        // 		dataPoints: [
        // 			{ y: 18, label: "Direct" },
        // 			{ y: 49, label: "Organic Search" },
        // 			{ y: 9, label: "Paid Search" },
        // 			{ y: 5, label: "Referral" },
        // 			{ y: 19, label: "Social" }
        // 		]
        // 	}]
        // }

        const { error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div class="jumbotron" style={{ marginTop: "25px" }}>
                            <h2 class="display-4">{this.state.Name}</h2>
                            <p class="lead">Location: Madison, Wisconsin 53706</p>
                            <p>Current Alias:</p>
                            <p>Student Count:</p>
                            <hr class="my-4"></hr>
                            <p>"The primary purpose of the University of Wisconsin–Madison is to provide a learning environment in which faculty,
                                staff and students can discover, examine critically, preserve and transmit the knowledge, wisdom and values that
                        will help ensure the survival of this and future generations and improve the quality of life for all."</p>
                            <a class="btn btn-lg" href="#" role="button" style={{ backgroundColor: "#DAA520" }}>Check out their website</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">

                                    {/* <CanvasJSChart options={options} /> */}

                                    {/* <img src="http://via.placeholder.com/150"></img>
                                    <h5>Pie Chart Display</h5> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="http://via.placeholder.com/150"></img>
                                    <h5>Donut Chart Display</h5>

                                </div>
                            </div>
                        </div>
                    </div><br></br>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="http://via.placeholder.com/150"></img>
                                    <h5>Pie Chart Display</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="button" class="btn" style={{ backgroundColor: "#DAA520" }}>Save Page as a PDF</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="button" class="btn" style={{ backgroundColor: "#DAA520" }}>Download</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="button" class="btn" style={{ backgroundColor: "#DAA520" }}>Print</button>
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

export default School;