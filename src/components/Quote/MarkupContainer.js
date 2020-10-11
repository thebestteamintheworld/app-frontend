import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Input} from "semantic-ui-react";

function sendMarkup(value, markup) {
    const url = 'http://nix112.tk:11600/api';
    const res = {
        method: "POST",
        type: "set",
        symbols: [value],
        value: Number(markup),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    };
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify(res));
    xhr.onload = function (res) {
        console.log(res);
    }
}


export default function MarkupContainer(props) {
    const [markup, setMarkup] = useState(0);


    console.log(props.theme);
    return (<Container>
        <Row className="d-flex justify-content-center">
            <Input onChange={(e) => {
                setMarkup(e.target.value);
            }}/>
            {/*<Form>*/}
            {/*    <Form.Row>*/}
            {/*        <Form.Control placeholder="" onChange={(e) => {*/}
            {/*            setMarkup(e.target.value);*/}
            {/*        }}/>*/}
            {/*    </Form.Row>*/}
            {/*</Form> */}
        </Row>
        <Row className="p-3">

            <Col className="d-flex justify-content-center">
                {props.theme === "tab-text-dark" ?
                    <Button variant="secondary" onClick={() => {
                        sendMarkup(props.value, markup)
                    }}>SEND</Button>
                    :
                    <Button variant="primary" onClick={() => {
                        sendMarkup(props.value, markup)
                    }}>SEND</Button>
                }
            </Col>


        </Row>
    </Container>);
}
