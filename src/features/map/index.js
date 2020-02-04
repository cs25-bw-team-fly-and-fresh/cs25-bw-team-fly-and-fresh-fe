import React from 'react';
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';
import { connect } from 'react-redux';

import './styles.css';

function getTileSprite(type) {
	switch (type) {
		case 0:
			return 'grass';
		case 5:
			return 'tree';
		case 6:
			return 'rock';
		case 7:
			return 'chest';
		default:
			return;
	}
}

function MapTile(props) {
	return (
		<div
			className={`tile ${getTileSprite(props.tile)}`}
			style={{
				height: SPRITE_SIZE,
				width: SPRITE_SIZE,
			}}>
			{/* {props.tile} */}
		</div>
	);
}

function MapRow(props) {
	return (
		<div className='row'>
			{props.tiles.map(tile => (
				<MapTile tile={tile} />
			))}
		</div>
	);
}

const Map = props => {
	return (
		<div
			style={{
				width: MAP_WIDTH,
				height: MAP_HEIGHT,
				// border: '4px solid white',
			}}>
			{props.tiles.map(row => (
				<MapRow tiles={row} />
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		tiles: state.map.tiles,
	};
};

export default connect(mapStateToProps)(Map);
