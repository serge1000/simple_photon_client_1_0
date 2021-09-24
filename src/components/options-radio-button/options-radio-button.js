import React from 'react';

import {
    RadioButtonItem,
    RadioButtonItemDiv,
    TitleDiv
  } from './options-radio-button.elements';

const OptionsRadioButton = ({title, content, onChangeRadioButton, current}) =>  {
    //debugger;
    return (
    
    <div>
        <TitleDiv>
            {title}            
        </TitleDiv>
        <div>
            { 
            content.map(option => (
                <RadioButtonItemDiv>
                    <RadioButtonItem 
                        type="radio" 
                        value={option} 
                        name={title}
                        onChange={onChangeRadioButton}
                        checked={option===current}
                        /> - {option} 
                </RadioButtonItemDiv>
            ))}
        </div>
    </div>

    )
}
export default OptionsRadioButton;