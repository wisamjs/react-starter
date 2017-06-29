import {fetchFromApi} from './utils';

export const getData = () =>
fetchFromApi('GET', 'pokemon/1/')
	.then(resp => resp.json());