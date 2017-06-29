import {ON_APP_MOUNT_SUCCESS} from '../actions/consts';

const INITIAL_STATE = {
	loading: true
};

export default function state(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case ON_APP_MOUNT_SUCCESS:
			return {...state, loading: false };
		default:
			return state;
	}
}
