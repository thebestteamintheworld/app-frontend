import React from "react"
import {Navbar} from "react-bootstrap";
// import {Container} from "semantic-ui-react";
import "./style.css"

export const Header = () => {
    return (
        <Navbar className={"rounded-bottom app-header"}>
            <div className="p-3">
                <Navbar.Brand >
                    <h2>Dealing Desk</h2>
                </Navbar.Brand>
            </div>
        </Navbar>
    )
}
