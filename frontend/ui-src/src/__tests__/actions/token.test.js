import C from '../../constants';
import * as token from '../../actions/token';
import { tokenData } from '../datasets';

let tokenDataSet = null;
beforeAll(() => {
  tokenDataSet = tokenData();
});

test('setup token action object', () => {
  const action = token.addToken(tokenDataSet);
  expect(action).toEqual({
    type: C.ADD_TOKEN,
    payload: tokenDataSet,
  });
});

test('remove token action object', () => {
  const action = token.removeToken();
  expect(action).toEqual({
    type: C.REMOVE_TOKEN,
  });
});
