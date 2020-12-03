import React, { Component } from 'react';

import './Login.css';

const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
	let valid = true;
	Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
	return valid;
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
			errors: {
				email: '',
				password: ''
			},
			isDisabled: true
		};
	}

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
			case 'email':
				errors.email = validEmailRegex.test(value) ? '' : 'ایمیل وارد شده معتبر نیست!';
				break;
			case 'password':
				errors.password = value.length < 8 ? 'رمز عبور می بایست 8 حرف باشد!' : '';
				break;
			default:
				break;
		}

		this.setState({ errors, [name]: value });
		if (validateForm(this.state.errors) && this.state.email !== null && this.state.password !== null) {
			this.setState({ isDisabled: false });
		} else {
			this.setState({ isDisabled: true });
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (validateForm(this.state.errors)) {
			console.info('Valid Form');
		} else {
			console.error('Invalid Form');
		}
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="login-form">
				<div className="meeting">
					<span className="span-one">Meeting-</span>
					<span className="span-tow">Time</span>
				</div>
				<p className="signup">
					آیا حساب کاربری ندارید؟ <a href="#">ثبت نام</a>{' '}
				</p>
				<form onSubmit={this.handleSubmit} noValidate>
					<div className="email">
						<label className="label" htmlFor="email">
							آدرس ایمیل
						</label>
						<input
							className="input-element "
							type="email"
							name="email"
							onChange={this.handleChange}
							noValidate
						/>
						{errors.email.length > 0 && <span className="error">{errors.email}</span>}
					</div>
					<div className="password">
						<label className="label" htmlFor="password">
							رمز عبور
						</label>
						<input
							className="input-element"
							type="password"
							name="password"
							onChange={this.handleChange}
							noValidate
						/>
						{errors.password.length > 0 && <span className="error">{errors.password}</span>}
					</div>
					<div>
						<label className="label" for="checkbox">
							مرا به خاطر بسپار
						</label>
						<input type="checkbox" name="checkbox" value="" />
					</div>
					<div>
						<button
							className={this.state.isDisabled ? 'disabled' : 'submit'}
							disabled={this.state.isDisabled}
						>
							ورود
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
