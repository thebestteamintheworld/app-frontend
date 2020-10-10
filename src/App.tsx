import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import {Col, Container, Row} from "react-bootstrap";
import Quotes from "./components/Quotes/Quotes";
import {Header} from "./components/Header";

function App() {
    return (
        <Container fluid>
            <Header/>
            <Row>
                <Col xs={12}>
                    <Quotes/>
                </Col>
                {/*</Col>*/}
            </Row>
        </Container>
    );
}

export default App;
