import React from 'react'
import './Login.css'
import InputLogin from "../UI/InputLogin/InputLogin"
class Login extends React.Component {
    state = {
        form: {
            email: {
                label: "Email",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                typing: false
            },
            password: {
                label: "Password",
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                typing: false
            },
            Rememberme: {
                label: "Remember me",
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',

                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                typing: false
            }
        }
    }

    checkValidation = (value, rules) => {
        let isValid = false
        if (rules.required) {
            isValid = value.trim() !== ''
        }
        return isValid
    }
    changeValuehandler = (event, inputElem) => {
        const updatedform = {
            ...this.state.form
        }
        const updatedElement = { ...updatedform[inputElem] }
        updatedElement.value = event.target.value

        updatedElement.valid = this.checkValidation(updatedElement.value, updatedElement.validation)
        updatedElement.typing = true
        updatedform[inputElem] = updatedElement
        this.setState({ form: updatedform })

    }

    render() {
        let elementArray = []
        for (let item in this.state.form) {
            elementArray.push({
                id: item,
                config: this.state.form[item]
            })

        }
        return (
            <div className="container">
                <div className="login-form">
                    <form >
                        <h2>Login</h2>
                        {elementArray.map((item) => {

                            return (
                                <>
                                    <label>{item.config.label}</label>
                                    <InputLogin key={item.id} elementConfig={item.config.elementConfig}
                                        value={item.config.value}
                                        inValid={!item.config.valid}
                                        typing={item.config.typing}
                                        change={(event) => { this.changeValuehandler(event, item.id) }} />
                                </>
                            )
                        })}
                        <button className="btn btn-primary" >submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login