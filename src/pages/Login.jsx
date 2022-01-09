import { Link } from 'react-router-dom'

const Login = () => {
	const handleSubmit = e => {
		e.preventDefault()
		// window.location.replace('/home')
	}

	return (
		<div className="login">
			<form className="login__form" onSubmit={handleSubmit}>
				<span className="login__title">Login</span>
				<label htmlFor="uname" className="login__label">
					Username
				</label>
				<input type="text" className="login__input" id="uname" />
				<label htmlFor="pwd" className="login__label">
					Password
				</label>
				<input type="password" className="login__input" id="pwd" />
				<Link to={`/home`} className="login__button">
					Log In
				</Link>
			</form>
		</div>
	)
}

export default Login
