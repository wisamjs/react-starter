import createAction from './utils/createAction';
import {
	ON_APP_MOUNT
} from './consts';

export const fetchData = (payload) => createAction(ON_APP_MOUNT, payload);