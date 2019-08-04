import React from "react";



function Body() {
    return (
        <div className="container">
            <div className="row">
                <div class="jumbotron">
                    <h2 class="display-4">University of Wisconsin-Madison</h2>
                    <p class="lead">Location: Madison, Wisconsin 53706</p>
                    <p>Current Alias:</p>
                    <p>Student Count:</p>
                    <hr class="my-4"></hr>
                    <p>"The primary purpose of the University of Wisconsin–Madison is to provide a learning environment in which faculty,
                        staff and students can discover, examine critically, preserve and transmit the knowledge, wisdom and values that
                        will help ensure the survival of this and future generations and improve the quality of life for all."</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Check out their website</a>
                </div>
            </div>
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
                                    <button type="button" class="btn btn-info">Save Page as a PDF</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="button" class="btn btn-info">Download</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="button" class="btn btn-info">Print</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div><br></br>
        </div>
    )
}

export default Body;