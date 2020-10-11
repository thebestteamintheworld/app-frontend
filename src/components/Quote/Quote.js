import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Spinner from "./Spinner";
import './style.css';

// interface quote {
//     currency1: string,
//         currency2: string,
//         bid: number,
//         ask: number,
//         spread: number,
//         textThemeClass: string,
// }

// fetch(url,
//     {
//         method: 'POST',
//         body:JSON.stringify({type:"get","symbols":["USD/CNH"]})
//     }).then((e) => e.json()
// ).
// then(res => console.log(res));

function Quote(props) {
    const [data, setData] = useState(null);
    const url = 'http://nix112.tk:11600/api';
    const res = {
        method: 'POST',
        type: 'get',
        mode: 'cors',
        symbols: [props.value],
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    };
    fetch(url, res)
        .then((res) => {
            res.json();
        })
        .then((result) => console.log(result));

    useEffect(() => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.send(JSON.stringify(res));
        xhr.onload = function (res) {
            let data = JSON.parse(res.target.responseText);
            console.log(data);
            setData(data);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.send(JSON.stringify(res));
            xhr.onload = function (res) {
                let data = JSON.parse(res.target.responseText);
                console.log(data);
                setData(data);
            }
        }, 1000)
        return () => clearInterval(interval)
    });

    return (<tr>
        <td className={'type-td-width'}>
            <Row>
                <Col className="d-flex justify-content-center" xs={12} md={6}>
                    <p className={props.textThemeClass}>{props.value}</p>
                </Col>
                <Col className={"remove-btn-wrapper" + " " + props.textThemeClass} onClick={() => {
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
        <td className={'bid-td-width'}>
            <p className={props.textThemeClass}><Spinner data={data} option='bid'/></p>
        </td>
        <td className={'ask-td-width'}>
            <p className={props.textThemeClass}><Spinner data={data} option='ask'/></p>
        </td>
        <td className={'spread-td-width'}>
            <p className={props.textThemeClass}><Spinner data={data} option='spread'/></p>
        </td>
        <td className={'markup-td-width'}>
            <p className={props.textThemeClass}></p>
        </td>

    </tr>);
// const []
}

export default Quote;
