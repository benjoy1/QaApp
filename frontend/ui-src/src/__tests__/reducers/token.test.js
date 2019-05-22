import * as reducer from '../../reducers';
import C from '../../constants';
import { tokenData } from '../datasets';

let tokenDataSet = null;
beforeAll(() => {
  tokenDataSet = tokenData();
});

test('should return default state', () => {
  const state = reducer.token(null, { type: 'DEFAULT' });
  expect(state).toEqual(null);
});

test('should add token', () => {
  const action = { type: C.ADD_TOKEN, payload: tokenDataSet };
  const state = reducer.token(null, action);
  expect(state).toEqual(tokenDataSet);
});

test('should remove token', () => {
  const action = { type: C.REMOVE_TOKEN };
  const state = reducer.token(tokenDataSet, action);
  expect(state).toBe(null);
});
