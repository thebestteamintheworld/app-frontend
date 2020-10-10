import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import CurrencyDropdownMenu from "../CurrencyDropdownMenu/CurrencyDropdownMenu";
import './style.css';
import Quote from "../Quote/Quote";


interface quote {
    key: string,
    value: string,
    text: string,
}

interface quoteFetching {
    TYPE: null | string,
    BID: null | number,
    ASK: null | number,
    SPREAD: null | number,
    MARKUP: null | number,
};

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
    for (let i of QList) {
        newQList.push({
            key: counter + i,
            value: i,
            text: i,
        });
        counter++;
    }

    return newQList;
}

function generateQListForFetching(currencies) {
    const QList: string[] = [];
    for (let i of currencies) {
        for (let j of currencies) {
            if (i !== j) {
                QList.push(`${i}/${j}`)
            }
        }
    }
    const newQList: quoteFetching[] = [];
    let counter: number = 0;
    for (let i of QList) {
        newQList.push({
            TYPE: i,
            BID: null,
            ASK: null,
            SPREAD: null,
            MARKUP: null,
        });
        counter++;
    }

    return newQList;
}

function findArr(value, store) {
    for (let arr of store) {
        if (arr.TYPE === value) {
            return arr;
        }
    }
}

let currentMessage


interface QuotesProps {
    darkTheme: boolean

}

function Quotes(props: QuotesProps) {
    let tableVariant: string = props.darkTheme ? "dark" : "light";
    let textVariant: string = props.darkTheme ? "tab-text-dark" : "";

    const currencies: string[] = [
        'USD', 'CNH', 'EUR', 'AUD', 'HKD', 'CHF', 'GBP', 'CAD'];
    const basicQList: string[] = ['USD/CNH',
        'EUR/USD', 'AUD/USD', 'USD/HKD', 'USD/CHF', 'EUR/GBP', 'GBP/USD', 'USD/CAD'
    ];
    const [dropdownList, setDropdownList] = useState<quote[]>(generateQList(currencies));
    const [fetchingData, setFetchingData] = useState<quoteFetching[]>(generateQListForFetching(currencies));
    const [quotes, setQuotes] = useState(basicQList);
    const [lastMes, setLastMes] = useState(null);
    const [data, setData] = useState();
    const sendRes = (socket) => {
        const res = JSON.stringify({
            type: "change",
            symbols: basicQList,
        });
        socket.send(res)
    };
    useEffect(() => {
            let socket = new WebSocket("ws://nix112.tk:9000");
            socket.onopen = function (e) {
                console.log('socket open');
                sendRes(socket);
            }
            socket.onmessage = (e) => {
                currentMessage = e.data;
                let data = JSON.parse(currentMessage);
                let spread = Math.abs(Math.floor((data.bidPrice - data.askPrice) * 100000) / 100000);
                const newData: quoteFetching = {
                    TYPE: data.eventSymbol.substring(0, 7),
                    BID: data.bidPrice,
                    ASK: data.askPrice,
                    SPREAD: spread,
                    MARKUP: null,
                }
                const res = fetchingData.map((obj) => {
                    if (obj.TYPE === newData.TYPE) {
                        return newData;
                    }
                    return obj;
                });
                setFetchingData(res);
            }

            return () => socket.close()
        },
        [fetchingData]
    )
    ;

    useEffect(() => {
        const interval = setInterval(() => setLastMes(currentMessage), 1000)
        return () => clearInterval(interval)
    })

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
                    <Quote textThemeClass={textVariant} key={index + value} value={value} setQuotes={setQuotes} setDropdownList={setDropdownList}
                           dropdownList={dropdownList} quotes={quotes} store={fetchingData}/>
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
