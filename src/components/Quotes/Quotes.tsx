import React, {useEffect, useState} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import CurrencyDropdownMenu from "../CurrencyDropdownMenu/CurrencyDropdownMenu";


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

function addQuete(quete: string, quetes: string[], setQuotes) {
    for (let i of quetes) {
        if (i == quete) return alert('fuck');
    }
    const newQuete: string[] = quetes.slice();
    newQuete.push(quete);
    return setQuotes(newQuete);
}

let currentMessage

function Quotes() {
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
            symbols: ['USD/CNH', 'EUR/USD', 'AUD/USD', 'USD/HKD', 'USD/CHF', 'EUR/GBP', 'GBP/USD'],
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
            currentMessage = e.data
        }

        return () => socket.close()
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setLastMes(currentMessage), 1000)
        return () => clearInterval(interval)
    })

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th className="text-center">TYPE</th>
                    <th className="text-center">BID</th>
                    <th className="text-center">ASK</th>
                    <th className="text-center">SPREAD</th>
                    <th className="text-center">MARKUP</th>
                </tr>
                </thead>
                <tbody>
                {quotes.map((value, index) => {
                    return (
                        <tr key={value + index}>
                            <td>
                                <Row>
                                    <Col xs={10}>
                                        <p>{value}</p>
                                    </Col>
                                    <Col onClick={() => {
                                        setQuotes(quotes.filter(text => value != text))
                                        setDropdownList([...dropdownList, {
                                            key: value + dropdownList.length,
                                            value: value,
                                            text: value,
                                        }]);
                                    }}>
                                        <i className="fas fa-times-circle remove-btn"/>
                                    </Col>
                                </Row>

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
            <p>{lastMes}</p>
        </div>
    );
}

export default Quotes;
