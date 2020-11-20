import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Spinner from "./Spinner";
import './style.css';
import MarkupContainer from "./MarkupContainer.js";

function fetchData(value, markupType, setData) {
    const url = 'https://app.nix112.tk/api/api';
    const res = {
        method: 'POST',
        type: 'get',
        mode: 'cors',
        symbols: [value],
        markup: markupType,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    };
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify(res));
    let data = null;
    xhr.onload = function (res) {
        data = JSON.parse(res.target.responseText);
        setData(data);
    }
}

function Quote(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(props.value, 'none', setData);
    }, []);

    useEffect(() => {
        const interval = setTimeout(() => {
            fetchData(props.value, 'none', setData);
        }, 1000);
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
           <MarkupContainer theme={props.textThemeClass} value = {props.value}/>
        </td>

    </tr>);
}

export default Quote;
