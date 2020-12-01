import React from 'react'
import './InputLogin.css'
const InputLogin = (props) => {
    let inputElement = null;

    let inputClass = ['input-element']

    if (props.inValid && props.typing) {
        inputClass.push('inValid')
    }
    switch (props.inputtype) {
        case 'input':
            inputElement = <input className={inputClass.join(' ')} {...props.elementConfig}
                value={props.value}
                onChange={props.change} />
            break
        default:
            inputElement = <input className={inputClass.join(' ')} {...props.elementConfig}
                value={props.value}
                onChange={props.change} />
    }
    return (
        <div className='input'>
            {inputElement}
        </div>
    )
}
export default InputLogin