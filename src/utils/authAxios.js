import axios from 'axios';

const authAxios = () => {
	const token = 'Token ' + localStorage.getItem('key');
	// console.log('token !! ', token);

	return axios.create({
		headers: {
			Authorization: token,
		},
	});
};

export default authAxios;
