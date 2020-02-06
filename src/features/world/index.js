import React, { useEffect, useState } from 'react';
import Map from '../map';
import Player from '../player';
import { room1, room2, room3, room4 } from '../../data/maps/1';
import store from '../../config/store';
import authAxios from '../../utils/authAxios';
import { useSelector } from 'react-redux';

const World = props => {
	// console.log(props);
	const position = useSelector(state => state.player.position);
	const direction = useSelector(state => state.player.direction);

	// console.log(direction);
	// console.log(position[1]);

	const [currentRoom, setCurrentRoom] = useState([]);

	useEffect(() => {
		if (position[0] === 0) {
			authAxios()
				.post(
					'http://cs25-bw-team-fly-and-fresh-be.herokuapp.com/api/adv/move/',
					{ direction: direction.toLowerCase() },
				)
				.then(res => {
					console.log(res);
					store.dispatch({ type: 'UPDATE_ROOM', payload: res.data });
					setCurrentRoom(res.data);
					return (position[0] = 720);
				})
				.catch(err => console.log(err));
		} else if (position[0] === 760) {
			authAxios()
				.post(
					'http://cs25-bw-team-fly-and-fresh-be.herokuapp.com/api/adv/move/',
					{ direction: direction.toLowerCase() },
				)
				.then(res => {
					console.log(res);
					store.dispatch({ type: 'UPDATE_ROOM', payload: res.data });
					setCurrentRoom(res.data);
					return (position[0] = 40);
				})
				.catch(err => console.log(err));
		} else if (position[1] === 0) {
			authAxios()
				.post(
					'http://cs25-bw-team-fly-and-fresh-be.herokuapp.com/api/adv/move/',
					{ direction: direction.toLowerCase() },
				)
				.then(res => {
					console.log(res);
					store.dispatch({ type: 'UPDATE_ROOM', payload: res.data });
					setCurrentRoom(res.data);
					return (position[0] = 320);
				})
				.catch(err => console.log(err));
		} else if (position[1] === 360) {
			authAxios()
				.post(
					'http://cs25-bw-team-fly-and-fresh-be.herokuapp.com/api/adv/move/',
					{ direction: direction.toLowerCase() },
				)
				.then(res => {
					console.log(res);
					store.dispatch({ type: 'UPDATE_ROOM', payload: res.data });
					setCurrentRoom(res.data);
					return (position[0] = 40);
				})
				.catch(err => console.log(err));
		}
	}, [direction, position]);

	useEffect(() => {
		authAxios()
			.get('http://cs25-bw-team-fly-and-fresh-be.herokuapp.com/api/adv/init/')
			.then(res => {
				console.log(res);
				store.dispatch({ type: 'UPDATE_ROOM', payload: res.data });

				setCurrentRoom(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	console.log(currentRoom);

	if (
		currentRoom.title === 'Tombs of the Dark OgreBurrows of the Silver Hunter'
	) {
		store.dispatch({
			type: 'ADD_TILES',
			payload: {
				tiles: room1,
			},
		});
	} else if (currentRoom.title === 'Labyrinth of the Storm Priest') {
		store.dispatch({
			type: 'ADD_TILES',
			payload: {
				tiles: room2,
			},
		});
	} else if (currentRoom.title === 'Lair of the Vanquished Dragon') {
		store.dispatch({
			type: 'ADD_TILES',
			payload: {
				tiles: room3,
			},
		});
	} else if (currentRoom.title === 'The Wasted Point') {
		store.dispatch({
			type: 'ADD_TILES',
			payload: {
				tiles: room4,
			},
		});
	}
	return (
		<div
			style={{
				position: 'relative',
				width: '800px',
				height: '400px',
				margin: '20px auto',
			}}>
			<Map />
			<Player currentRoom={currentRoom} />
		</div>
	);
};

export default World;
