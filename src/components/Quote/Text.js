import React from "react";

function Text(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column justify-content-center ">
                <p className="text-primary">NO:<p>{props.info1}</p></p>
                <p className="text-success">FIXED:<p> {props.info2}</p></p>
                <p className="text-danger">FLOAT:<p>{props.info3}</p></p>
            </div>
        </div>
    );

}

export default Text;
