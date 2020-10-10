import React, {useState} from 'react';
import {Dropdown} from "semantic-ui-react";


function CurrencyDropdownMenu(props) {
    const [value, setValue] = useState(null);
    return (<Dropdown
        placeholder='Select Quote'
        fluid
        search
        selection
        options={props.data}
        onChange={(tech, data) => {
            props.setDropdownMenuValue(data.value)
        }
        }
    />);
}

export default CurrencyDropdownMenu;
