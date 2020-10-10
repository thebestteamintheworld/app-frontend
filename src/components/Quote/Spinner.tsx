import React from "react";

function Spinner (props)  {
    if (props.data === null) {
        return(
            <div>
                <p>LOADING</p>
            </div>
        )
    }
    else {
        if (props.option === 'ask') {
            return(
                <div>
                    <p>{props.data.ASK}</p>
                </div>
            )
        }
        if (props.option === 'bid') {
            return(
                <div>
                    <p>{props.data.BID}</p>
                </div>
            )
        }
        if (props.option === 'spread') {
            return(
                <div>
                    <p>{props.data.SPREAD}</p>
                </div>
            )
        }
    }
};

export default Spinner;
