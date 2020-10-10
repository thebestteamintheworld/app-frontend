import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import {Dropdown} from 'semantic-ui-react';

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]


const DropdownExampleSearchSelection = () => (
    <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
    />
)


function Quotes() {
    const quotesList: string[] = [
        'EUR/USD', 'AUD/USD', 'USD/HKD', 'USD/CHF', 'EUR/GBP', 'GBP/USD', 'USD/CAD'
    ]
    const [quotes, setQuotes] = useState(quotesList);
    let rows = [];
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
                    <DropdownExampleSearchSelection/>
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
