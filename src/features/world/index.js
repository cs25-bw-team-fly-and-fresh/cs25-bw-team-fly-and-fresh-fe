import React, { useEffect, useState } from 'react';
import Map from '../map';
import Player from '../player';
import { tiles } from '../../data/maps/1';
import store from '../../config/store';
import authAxios from '../../utils/authAxios';

const World = props => {
	// const [rooms, setRooms] = useState([]);

	useEffect(() => {
		authAxios()
			.get('http://cs25-bw-team-fly-and-fresh-be.herokuapp.com/api/adv/init/')
			.then(res => {
				console.log(res);
				// setRooms(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	// console.log(rooms);

	store.dispatch({
		type: 'ADD_TILES',
		payload: {
			tiles,
		},
	});
	return (
		<div
			style={{
				position: 'relative',
				width: '800px',
				height: '400px',
				margin: '20px auto',
			}}>
			<Map />
			<Player {...props} />
		</div>
	);
};

export default World;
