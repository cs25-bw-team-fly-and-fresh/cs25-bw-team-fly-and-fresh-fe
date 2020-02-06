import React, { useState } from 'react';
import axios from 'axios';

const Register = props => {
	// console.log(props);

	const [user, setUser] = useState({
		username: '',
		email: '',
		password1: '',
		password2: '',
	});

	const userInput = e => {
		// console.log(e);
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
		console.log(user);
	};

	const userRegistration = e => {
		e.preventDefault();
		axios
			.post(
				`http://cs25-bw-team-fly-and-fresh-be.herokuapp.com/api/registration/`,
				user,
			)
			.then(res => {
				console.log(res);
				localStorage.setItem('key', res.data.key);
				props.history.push('/login');
				document.cookie.split(';').forEach(function(c) {
					document.cookie = c
						.replace(/^ +/, '')
						.replace(
							/=.*/,
							'=;expires=' + new Date().toUTCString() + ';path=/',
						);
				});
			})
			.catch(err => console.log(err, 'for sure error'));
	};

	return (
		<div>
			<form onSubmit={userRegistration}>
				<label>username</label> <br />
				<input
					id='username'
					name='username'
					placeholder='username'
					type='text'
					onChange={userInput}
					value={user.username}
					autoComplete='off'
				/>
				<br />
				<label>email address</label> <br />
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
					name='password1'
					placeholder='password'
					type='password'
					onChange={userInput}
					value={user.password1}
					autoComplete='off'
				/>
				<br />
				<label>verify password</label> <br />
				<input
					name='password2'
					placeholder='password'
					type='password'
					onChange={userInput}
					value={user.password2}
					autoComplete='off'
				/>
				<br />
				<button>log in</button>
			</form>
		</div>
	);
};

export default Register;
