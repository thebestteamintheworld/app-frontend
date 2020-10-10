import React, {useState} from 'react';
import {Dropdown} from "semantic-ui-react";


function CurrencyDropdownMenu(props) {
    return (
        <Dropdown
            placeholder='Select Quote'
            fluid
            search
            selection
            options={props.data}
            onChange={(_, {value}) => props.onChange(value)}
        />
    );
}

export default CurrencyDropdownMenu;
