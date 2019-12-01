import React from "react";

function Schools() {
    return (
        <div className="card" style={{ margin: "20px"}}>
            <div className="text-black text-center rgba-stylish-strong py-5 px-4">
                <div className="py-5">
                    <h3 style={{color: "#DAA520"}}><i className="far fa-frown"></i> Oh No!</h3>
                    <h2 className="card-title h2 my-4 py-2">We're sorry we can't display any other schools information right now.</h2>
                    <p className="mb-4 pb-2 px-md-5 mx-md-5">Be sure to check back soon for other schools info! For now, why not check out University of Wisconsin?</p>
                    <a className="btn" href="/" role="button" style={{ backgroundColor: "#DAA520" }}><i className="fas fa-clone left"></i> Click Me!</a>
                </div>
            </div>
        </div>
    )
}

export default Schools;