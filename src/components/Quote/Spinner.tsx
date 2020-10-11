import React from "react";
import Text from './Text';


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
                <Text info1={askNone} info2={askFixed} info3={askFloat}/>
            )
        }
        if (props.option === 'bid') {
            let bidNone = Math.abs(Math.floor((props.data.none[0].bid) * 100000) / 100000);
            let bidFixed = Math.abs(Math.floor((props.data.fixed[0].bid) * 100000) / 100000);
            let bidFloat = Math.abs(Math.floor((props.data.float[0].bid) * 100000) / 100000);
            return (
                <Text info1={bidNone} info2={bidFixed} info3={bidFloat}/>
            )
        }
        if (props.option === 'spread') {
            let spreadNone = Math.abs(Math.floor((props.data.none[0].spread) * 100000) / 100000);
            let spreadFixed = Math.abs(Math.floor((props.data.fixed[0].spread) * 100000) / 100000);
            let spreadFloat = Math.abs(Math.floor((props.data.float[0].spread) * 100000) / 100000);
            return (
                <Text info1={spreadNone} info2={spreadFixed} info3={spreadFloat}/>
            )
        }
    }
    console.log(props.data);
}

export default Spinner;
