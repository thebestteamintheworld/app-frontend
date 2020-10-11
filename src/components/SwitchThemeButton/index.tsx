import './style.css'
import React from "react";

interface SwitchThemeButtonProps
{
    darkTheme: boolean,
    callBack: ()=>void,
}

export function SwitchThemeButton(props:SwitchThemeButtonProps)
{

    let txtClName:string=props.darkTheme?" txt-swtch-dark":"";
    return (<div className='custom-control custom-switch switch-main'>
        <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitches'
            checked={props.darkTheme}
            onChange={props.callBack}
            readOnly
        />
        <label className={'custom-control-label'+txtClName} htmlFor='customSwitches'>
            BLACK LIVES MATTER!
        </label>
    </div>)
}

export default SwitchThemeButton;
