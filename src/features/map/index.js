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
			}}></div>
	);
}

function MapRow(props) {
	return (
		<div className='row'>
			{props.tiles.map(tile => (
				<MapTile key={Math.random()} tile={tile} />
			))}
		</div>
	);
}

const Map = props => {
	return (
		<div
			id='themap'
			style={{
				width: MAP_WIDTH,
				height: MAP_HEIGHT,
			}}>
			{props.tiles.map(row => (
				<MapRow key={Math.random()} tiles={row} />
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
