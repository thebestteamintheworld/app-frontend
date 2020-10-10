import React from "react"
import {Navbar} from "react-bootstrap";
import {Container} from "semantic-ui-react";

export const Header = () => {

    const navbarStyle = {
        bg: "dark",
        expand: false,
        position: "relative"
    }


    return (
        <Navbar {...navbarStyle} className={"mx-3 md-2 rounded-bottom text-"}>
            <Container className={"text-center my-2"}>
                <Navbar.Brand>
                    <h2>Dealing Desk</h2>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}