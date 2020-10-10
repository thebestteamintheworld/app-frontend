import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Spinner from "./Spinner";
interface quote {
    currency1: string,
    currency2: string,
    bid: number,
    ask: number,
    spread: number,
}


function Quote(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
        const arrays = props.store;
        for (let arr of arrays) {
            if (arr.TYPE === props.value) {
                console.log(arr)
                setData(arr);
            }
        }
    });

    return (<tr>
        <td>
            <Row>
                <Col className="d-flex justify-content-center" xs={12} md={6}>
                    <p>{props.value}</p>
                </Col>
                <Col className="remove-btn-wrapper" onClick={() => {
                    props.setQuotes(props.quotes.filter(text => props.value != text))
                    props.setDropdownList([...props.dropdownList, {
                        key: props.value + props.dropdownList.length,
                        value: props.value,
                        text: props.value,
                    }]);
                }}>
                    <i className="fas fa-times-circle"/>
                </Col>
            </Row>
        </td>
        <td>
            <p><Spinner data = {data} option = 'bid'/></p>
        </td>
        <td>
            <p><Spinner data = {data} option = 'ask'/></p>
        </td>
        <td>
            <p><Spinner data = {data} option = 'spread'/></p>
        </td>
        <td>
            <p></p>
        </td>

    </tr>);
    // const []
}

export default Quote;
