import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import CurrencyDropdownMenu from "../CurrencyDropdownMenu/CurrencyDropdownMenu";
import './style.css';
import Quote from "../Quote/Quote.js";


interface quote {
    key: string,
    value: string,
    text: string,
}

function generateQList(currencies) {
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
    const exception: string[] = ['CNH/USD', 'USD/EUR', 'USD/AUD', 'HKD/USD', 'CHF/USD', 'USD/GBP', 'CAD/USD'];
    for (let i of QList) {
        if (exception.includes(i) === false) {
            newQList.push({
                key: counter + i,
                value: i,
                text: i,
            });
        }
        counter++;
    }

    return newQList;
}

interface QuotesProps {
    darkTheme: boolean

}

function Quotes(props: QuotesProps) {
    let textVariant: string = props.darkTheme ? "tab-text-dark" : "";

    const currencies: string[] = [
        'USD', 'CNH', 'EUR', 'AUD', 'HKD', 'CHF', 'GBP', 'CAD'];
    const basicQList: string[] = ['USD/CNH',
        'EUR/USD', 'AUD/USD', 'USD/HKD', 'USD/CHF', 'EUR/GBP', 'GBP/USD', 'USD/CAD'
    ];
    const [dropdownList, setDropdownList] = useState<quote[]>(generateQList(currencies));
    const [quotes, setQuotes] = useState(basicQList);
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th className={"text-center" + " " + textVariant}>TYPE</th>
                <th className={"text-center" + " " + textVariant}>BID</th>
                <th className={"text-center" + " " + textVariant}>ASK</th>
                <th className={"text-center" + " " + textVariant}>SPREAD</th>
                <th className={"text-center" + " " + textVariant}>MARKUP</th>
            </tr>
            </thead>
            <tbody>
            {quotes.map((value, index) => {
                return (
                    <Quote textThemeClass={textVariant} key={index + value} value={value} setQuotes={setQuotes}
                           setDropdownList={setDropdownList}
                           dropdownList={dropdownList} quotes={quotes}/>
                );
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
