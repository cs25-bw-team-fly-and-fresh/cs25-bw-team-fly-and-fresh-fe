import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './loginStyles.css';

const Login = props => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const userInput = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const userLogin = e => {
		e.preventDefault();
		axios
			.post(
				`http://cs25-bw-team-fly-and-fresh-be.herokuapp.com/api/login/`,
				user,
			)
			.then(res => {
				console.log(res);
				props.history.push('/game');
			})
			.catch(err => console.log(err, 'for sure error'));
	};

	return (
		<div className='container'>
			<div className='inner-container'>
				<div className='box' >
					<h1>Login</h1>
					<form onSubmit={userLogin} >
						<label>username</label> <br />
						<input
							name='username'
							placeholder='username'
							type='text'
							onChange={userInput}
							value={user.username}
							autoComplete='off'
						/>
						<br />
						<label>email</label> <br />
						<input
							name='email'
							placeholder='email'
							type='email'
							onChange={userInput}
							value={user.email}
							autoComplete='off'
						/>
						<br />
						<label>password</label> <br />
						<input
							name='password'
							placeholder='password'
							type='password'
							onChange={userInput}
							value={user.password}
							autoComplete='off'
						/>
						<br />
						<button>Login</button>
						<p>Not a member? <Link to='/register'><span>Sign Up</span></Link></p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
