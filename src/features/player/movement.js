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
				return [oldPos[0], oldPos[1] + SPRITE_SIZE]; // y axios - 40
			default:
				return;
		}
	}

	// make player unable to move through rocks and trees
	function observeImpassible(oldPos, newPos) {
		const tiles = store.getState().map.tiles;
		const y = newPos[1] / SPRITE_SIZE;
		const x = newPos[0] / SPRITE_SIZE;
		const nextTile = tiles[y][x];
		return nextTile <= 4;
	}

	// make sure player is in bounds before moving
	function observeBoundaries(oldPos, newPos) {
		const y = newPos[1] / SPRITE_SIZE; // divide by sprite size to get 40 tiles
		const x = newPos[0] / SPRITE_SIZE;
		if (
			x >= 0 &&
			x <= MAP_WIDTH - SPRITE_SIZE && // subtract sprite size at the end so character can't walk off screen by one tile
			y >= 0 &&
			y <= MAP_HEIGHT - SPRITE_SIZE
		) {
			return true;
		} else {
			return false;
		}
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

	function attemptMove(direction) {
		const oldPos = store.getState().player.position;
		const newPos = getNewPosition(oldPos, direction);
		// if observeBoundaries and observerImpassible return true then we can dispatch our move
		if (observeBoundaries(oldPos, newPos) && observeImpassible(oldPos, newPos))
			dispatchMove(newPos);
	}

	// links arrow keys to directions
	function handleKeyDown(e) {
		e.preventDefault();
		switch (e.keyCode) {
			case 37: // left arrow
				return attemptMove('WEST');
			case 38: // up arrow
				return attemptMove('NORTH');
			case 39: // right arrow
				return attemptMove('EAST');
			case 40: // down arrow
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
