import store from '../../config/store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants';

export default function handleMovement(player) {
	function getNewPosition(oldPos, direction) {
		switch (direction) {
			case 'WEST':
				return [oldPos[0] - SPRITE_SIZE, oldPos[1]]; //  x axis - 40
			case 'NORTH':
				return [oldPos[0], oldPos[1] - SPRITE_SIZE]; // y axis - 40
			case 'EAST':
				return [oldPos[0] + SPRITE_SIZE, oldPos[1]]; // x axis + 40
			case 'SOUTH':
				return [oldPos[0], oldPos[1] + SPRITE_SIZE]; // y axios + 40
			default:
				return;
		}
	}

	// player unable to move through objects
	function observeImpassible(oldPos, newPos) {
		const tiles = store.getState().map.tiles;
		const y = newPos[1] / SPRITE_SIZE; // divide by 40 to get 20 tiles
		const x = newPos[0] / SPRITE_SIZE; // divide by 40 get 10 tiles
		const nextTile = tiles[y][x];
		if (nextTile < 5) {
			// we can move through 0-4
			return true;
		} else {
			// cannot move through tiles > 5
			return false;
		}
	}

	// player can only move within these boundaries
	function observeBoundaries(oldPos, newPos) {
		return (
			newPos[0] >= 0 &&
			newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
			newPos[1] >= 0 &&
			newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
		);
	}

	// moves the player
	function dispatchMove(newPos) {
		store.dispatch({
			type: 'MOVE_PLAYER',
			payload: {
				position: newPos,
			},
		});
	}

	//  checks for boundaries or impassible objects before dispatching move
	function attemptMove(direction) {
		const oldPos = store.getState().player.position;
		const newPos = getNewPosition(oldPos, direction);
		// if observeBoundaries and observerImpassible return true then we can dispatch our move
		if (
			observeBoundaries(oldPos, newPos) === true &&
			observeImpassible(oldPos, newPos) === true
		) {
			return dispatchMove(newPos);
		} else {
			return false;
		}
	}

	// links arrow keys to directions
	function handleKeyDown(e) {
		e.preventDefault();
		switch (e.keyCode) {
			case 65: // w
				return attemptMove('WEST');
			case 87: // a
				return attemptMove('NORTH');
			case 68: // s
				return attemptMove('EAST');
			case 83: // d
				return attemptMove('SOUTH');
			default:
				console.log(e.keyCode);
		}
	}

	window.addEventListener('keydown', e => {
		handleKeyDown(e);
	});
	return player;
}
