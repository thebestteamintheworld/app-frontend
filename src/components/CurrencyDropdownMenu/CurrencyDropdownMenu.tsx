import React from 'react';
import {Dropdown} from "semantic-ui-react";

function CurrencyDropdownMenu(props) {
    // const currencyOptions = [
    //     {key: 'al', value: 'al', text: 'EUR/USD'},
    // ]

    return (<Dropdown
        placeholder='Select Quote'
        fluid
        search
        selection
        options={props.data}
    />);
}

export default CurrencyDropdownMenu;
