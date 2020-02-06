import React, { useState } from 'react';
import authAxios from '../utils/authAxios';

const Login = props => {
	// console.log(props);
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
		// console.log(user);
	};

	const userLogin = e => {
		e.preventDefault();
		authAxios()
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
		<div>
			<form onSubmit={userLogin}>
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
				<button>log in</button>
			</form>
		</div>
	);
};

export default Login;
