import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Input} from "semantic-ui-react";

function sendMarkup(value, markup) {
    const url = 'http://nix112.tk:11600/api';
    const res = {
        method:"POST",
        type: "set",
        symbols:[value],
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
    return (<Container>
        <Row className="d-flex justify-content-center">
            <Input onChange={(e) => {
                setMarkup(e.target.responseText);
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
            <Col><Button>FIXED</Button></Col>
            <Col><Button onClick={() => {
                sendMarkup(props.value, markup)
            }}>SEND</Button></Col>
            <Col><Button>FLOAT</Button></Col>
        </Row>
    </Container>);
}