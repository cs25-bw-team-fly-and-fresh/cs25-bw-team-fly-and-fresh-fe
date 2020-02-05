import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import walkSprite from './player_walk.png';
import handleMovement from '../player/movement';

const Player = props => {
	// console.log(props);

	const position = useSelector(state => state.player.position);
	const spriteLocation = useSelector(state => state.player.spriteLocation);

	useEffect(() => {
		handleMovement();
	}, []);

	return (
		<>
			<div>
				<div
					style={{
						position: 'absolute',
						top: position[1],
						left: position[0],
						backgroundImage: `url(${walkSprite})`,
						backgroundPosition: spriteLocation,
						width: '40px',
						height: '40px',
					}}
				/>
			</div>
		</>
	);
};

export default Player;
