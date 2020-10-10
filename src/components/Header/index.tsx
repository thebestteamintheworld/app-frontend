import React from "react"
import {Navbar, Container} from "react-bootstrap";
// import {Container} from "semantic-ui-react";
import "./style.css"

export const Header = () => {
    return (
        <Navbar className={"rounded-bottom app-header"}>
            <Container className="justify-content-center p-3">
                <Navbar.Brand>
                    <h2>Dealing Desk</h2>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
