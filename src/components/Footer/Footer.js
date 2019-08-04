import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer class="page-footer font-small teal pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase font-weight-bold">Education Analytics</h5>
                        <hr></hr>
                        <p>131 West Wilson Street Suite 200 Madison, WI 53703</p>
                        <p>(608) 466-4966</p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"></hr>
                    <div class="col-md-6 mb-md-0 mb-3">
                        <h5 class="text-uppercase font-weight-bold">Created by: Patience Deaton</h5>
                        <hr></hr>
                        <p>Orlando, FL</p>
                        <p>patience.deaton2@outlook.com</p>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2018 Copyright
            </div>
        </footer>
    )
}

export default Footer;