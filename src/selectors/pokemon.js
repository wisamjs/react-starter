import { 
  createSelector, 
  createStructuredSelector 
} from 'reselect';

import R from 'ramda';

import {
  getStats
} from './raw-selectors';


export const getMainStat = createSelector(
  getStats,
  R.head
)

export const historySelectors = createStructuredSelector({
  getMainStat, 
});



