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
            console.log(props.data);
            return(
                <div>
                    <p>{props.data[0].ask}</p>
                </div>
            )
        }
        if (props.option === 'bid') {
            return(
                <div>
                    <p>{props.data[0].bid}</p>
                </div>
            )
        }
        if (props.option === 'spread') {
            return(
                <div>
                    {/*<p>{props.data.SPREAD}</p>*/}
                </div>
            )
        }
    }
};

export default Spinner;
