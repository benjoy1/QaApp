import C from '../../constants';
import * as cookies from '../../actions/cookie';
import { cookieData } from '../datasets';

let cookieDataSet = null;
beforeAll(() => {
  cookieDataSet = cookieData();
});

test('Add cookie with valid value from readCookie', () => {
  Object.defineProperty(document, 'cookie', {
    get: jest.fn().mockImplementation(() => {
      return cookieDataSet;
    }),
    set: jest.fn().mockImplementation(() => {})
  });

  const action = cookies.addCookie('JSESSIONID');
  expect(action).toEqual({
    type: C.ADD_COOKIE,
    payload: '09CDBF9448C974F18FDCB75AB179953E.azprodev2-b2b1'
  });
});

test('Add cookie with invalid value from readCookie', () => {
  const action = cookies.addCookie('DEFAULT');
  expect(action).toEqual({
    type: C.ADD_ERROR,
    payload: 'could not read JSESSION ID from cookie'
  });
});

test('Write cookie to document', () => {
  const action = cookies.writeCookie(cookieDataSet);
  expect(action).toEqual(cookieDataSet);
});

test('Remove cookie', () => {
  const action = cookies.removeCookie();
  expect(action).toEqual({ type: C.REMOVE_COOKIE });
});
