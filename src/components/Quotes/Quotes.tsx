import React, {useState} from 'react';
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

function Quotes() {
    const currencies: string[] = [
        'EUR', 'AUD', 'USD', 'HKD', 'CHF', 'GBP', 'USD', 'CAD'
    ];
    const basicQList: string[] = [
        'EUR/USD', 'AUD/USD', 'USD/HKD', 'USD/CHF', 'EUR/GBP', 'GBP/USD', 'USD/CAD'
    ];
    const [dropdownList, setDropdownList] = useState<quote[]>(generateQList(currencies, basicQList));
    const [quotes, setQuotes] = useState(basicQList);
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>TYPE</th>
                <th>BID</th>
                <th>ASK</th>
                <th>SPREAD</th>
                <th>MARKUP</th>
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
    );
}

export default Quotes;
