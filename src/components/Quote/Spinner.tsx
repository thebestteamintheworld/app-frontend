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
            let ask = Math.abs(Math.floor((props.data[0].ask) * 100000) / 100000);
            console.log(props.data);
            return(
                <div>
                    <p>{ask}</p>
                </div>
            )
        }
        if (props.option === 'bid') {
            let bid = Math.abs(Math.floor((props.data[0].bid) * 100000) / 100000);
            return(
                <div>
                    <p>{bid}</p>
                </div>
            )
        }
        if (props.option === 'spread') {
            let spread = Math.abs(Math.floor((props.data[0].spread) * 100000) / 100000);
            return(
                <div>
                    <p>{spread}</p>
                </div>
            )
        }
    }
}

export default Spinner;
