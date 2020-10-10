import React from "react"
import {Navbar} from "react-bootstrap";
// import {Container} from "semantic-ui-react";
import "./style.css"
export interface HeaderProps
{
    darkTheme:boolean
}
export const Header = (props:HeaderProps) => {
    let cl1:string=props.darkTheme? "app-header bg-dark head-txt-dark":"app-header";
    return (
        <Navbar className={"rounded-bottom "+cl1}>
            <div className="p-3">
                <Navbar.Brand >
                    <h2>Dealing Desk</h2>
                </Navbar.Brand>
            </div>
        </Navbar>
    )
}
