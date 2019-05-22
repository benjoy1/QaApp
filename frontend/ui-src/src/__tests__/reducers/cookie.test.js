import * as reducer from '../../reducers';
import C from '../../constants';
import { cookieData } from '../datasets';

let cookieDataSet = null;
beforeAll(() => {
    cookieDataSet = cookieData();
});

test('should return default state', () => {
    const state = reducer.cookie(null, { type: 'DEFAULT'});
    expect(state).toEqual(null);
});

test('should add cookie', () => {
    const action = { type: C.ADD_COOKIE,  payload: cookieDataSet}
    const state = reducer.cookie('', action);
    expect(state).toEqual(cookieDataSet);
});

test('should remove cookie', () => {
    const state = reducer.cookie(cookieDataSet, { type: C.REMOVE_COOKIE});
    expect(state).toEqual(null);
});