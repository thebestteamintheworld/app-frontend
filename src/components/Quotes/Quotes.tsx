import React, {useEffect, useState} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import CurrencyDropdownMenu from "../CurrencyDropdownMenu/CurrencyDropdownMenu";
import './style.css';

interface quote {
    key: string,
    value: string,
    text: string,
};


function generateQList(currencies, basicQList) {
    const QList: string[] = [];
    for (let i of currencies) {
        for (let j of currencies) {
            if (i !== j) {
                QList.push(`${i}/${j}`)
            }
        }
    }
    const newQList: quote[] = [];
    let counter: number = 0;
    for (let i of QList) {
        if (basicQList.indexOf(i) == -1) {
            newQList.push({
                key: counter + i,
                value: i,
                text: i,
            });
            counter++;
        }
    }

    return newQList;
}

let currentMessage


interface QuotesProps
{
    darkTheme:boolean

}

function Quotes(props:QuotesProps) {
    let tableVariant:string=props.darkTheme? "dark":"light";
    let textVariant:string=props.darkTheme? "tab-text-dark":"";

    const currencies: string[] = [
        'EUR', 'AUD', 'USD', 'HKD', 'CHF', 'GBP', 'USD', 'CAD'
    ];
    const basicQList: string[] = ['USD/CNH',
        'EUR/USD', 'AUD/USD', 'USD/HKD', 'USD/CHF', 'EUR/GBP', 'GBP/USD', 'USD/CAD'
    ];
    const [dropdownList, setDropdownList] = useState<quote[]>(generateQList(currencies, basicQList));
    const [quotes, setQuotes] = useState(basicQList);
    const [lastMes, setLastMes] = useState(null);
    const sendRes = (socket) => {
        const res = JSON.stringify({
            type: "change",
            symbols: ['USD/CNH', 'EUR/USD', 'AUD/USD', 'USD/HKD', 'USD/CHF', 'EUR/GBP', 'GBP/USD', 'USD/CAD'],
        });
        socket.send(res)
    };

    useEffect(() => {
        let socket = new WebSocket("ws://nix112.tk:9000");
        socket.onopen = function (e) {
            console.log('socket is open');
            sendRes(socket);
        }
        socket.onmessage = (e) => {
            console.log(e.data);
            currentMessage = e.data;
            console.info(JSON.parse(e.data));
        }

        return () => socket.close()
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setLastMes(currentMessage), 1000)
        return () => clearInterval(interval)
    })
    // const msg = JSON.parse(currentMessage);

    return (
        <Table striped bordered hover variant={tableVariant}>
            <thead>
            <tr>
                <th className={"text-center"+" "+textVariant}>TYPE</th>
                <th className={"text-center"+" "+textVariant}>BID</th>
                <th className={"text-center"+" "+textVariant}>ASK</th>
                <th className={"text-center"+" "+textVariant}>SPREAD</th>
                <th className={"text-center"+" "+textVariant}>MARKUP</th>
            </tr>
            </thead>
            <tbody>
            {quotes.map((value, index) => {
                return (
                    <tr key={value + index}>
                        <td>
                            <Row>
                                <Col className = "d-flex justify-content-center" xs ={12} md={6}>
                                    <p className={textVariant}>{value}</p>
                                </Col>
                                <Col className={"remove-btn-wrapper"+" "+textVariant} onClick={() => {
                                    setQuotes(quotes.filter(text => value != text))
                                    setDropdownList([...dropdownList, {
                                        key: value + dropdownList.length,
                                        value: value,
                                        text: value,
                                    }]);
                                }}>
                                    <i className="fas fa-times-circle"/>
                                </Col>
                            </Row>

                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>

                    </tr>
                )
            })}
            <tr>
                <td colSpan={5} className="text-center">
                    <CurrencyDropdownMenu data={dropdownList} onChange={
                        (value) => {
                            if (quotes.indexOf(value) === -1) {
                                setQuotes([...quotes, value]);
                            }
                        }
                    }/>
                </td>
            </tr>
            </tbody>
        </Table>
    );
}

export default Quotes;
