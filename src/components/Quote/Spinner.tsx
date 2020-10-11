import React from "react";

function Spinner(props) {
    if (props.data === null) {
        return (
            <div>
                <p>LOADING</p>
            </div>
        )
    } else {
        if (props.option === 'ask') {
            let askNone = Math.abs(Math.floor((props.data.none[0].ask) * 100000) / 100000);
            let askFixed = Math.abs(Math.floor((props.data.fixed[0].ask) * 100000) / 100000);
            let askFloat = Math.abs(Math.floor((props.data.float[0].ask) * 100000) / 100000);
            return (
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        NO: <p>{askNone}</p>
                        FIXED: <p>{askFixed}</p>
                        FLOAT: <p>{askFloat}</p>

                    </div>
                </div>
            )
        }
        if (props.option === 'bid') {
            let bidNone = Math.abs(Math.floor((props.data.none[0].bid) * 100000) / 100000);
            let bidFixed = Math.abs(Math.floor((props.data.fixed[0].bid) * 100000) / 100000);
            let bidFloat = Math.abs(Math.floor((props.data.float[0].bid) * 100000) / 100000);
            return (
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center ">
                        NO: <p>{bidNone}</p>
                        FIXED: <p>{bidFixed}</p>
                        FLOAT:<p>{bidFloat}</p>
                    </div>
                </div>
            )
        }
        if (props.option === 'spread') {
            let spreadNone = Math.abs(Math.floor((props.data.none[0].spread) * 100000) / 100000);
            let spreadFixed = Math.abs(Math.floor((props.data.fixed[0].spread) * 100000) / 100000);
            let spreadFloat = Math.abs(Math.floor((props.data.float[0].spread) * 100000) / 100000);
            return (
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        NO: <p>{spreadNone}</p>
                        FIXED: <p>{spreadFixed}</p>
                        FLOAT: <p>{spreadFloat}</p>
                    </div>
                </div>
            )
        }
    }
    console.log(props.data);
}

export default Spinner;
