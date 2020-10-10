import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import CurrencyDropdownMenu from "../CurrencyDropdownMenu/CurrencyDropdownMenu";

interface quote {
    key: number,
    value: string,
    text: string,
};


function generateQList(currencies, basicQList) {
    const QList:string[] = [];
    for (let i of currencies) {
        for (let j of currencies) {
            if (i !== j) {
                QList.push(`${i}/${j}`)
            }
        }
    }
    const newQList:quote[] = [];
    let counter:number = 0;
    for (let i of QList) {
        if (basicQList.indexOf(i) == -1) {
            newQList.push({
                key: counter,
                value: i,
                text: i,
            });
        }
    }

    return newQList;
}


function Quotes() {
    const currencies:string[] = [
        'EUR', 'AUD', 'USD', 'HKD', 'CHF', 'GBP', 'USD', 'CAD'
    ];
    const basicQList: string[] = [
        'EUR/USD', 'AUD/USD', 'USD/HKD', 'USD/CHF', 'EUR/GBP', 'GBP/USD', 'USD/CAD'
    ];

    const QList:quote[] = generateQList(currencies, basicQList);
    console.log(QList);
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
                    <tr>
                        <td key={index}>
                            <p>{value}</p>
                        </td>
                    </tr>
                )
            })}
            <tr>
                <td colSpan = {5} className="text-center" >
                    <CurrencyDropdownMenu data={QList}/>
                </td>
            </tr>
            </tbody>
        </Table>
    );
}

export default Quotes;

// onClick={() => {
//     let check = prompt();
//     const rows = quotes.slice();
//     rows.push(check);
//     setQuotes(rows);
// }}
