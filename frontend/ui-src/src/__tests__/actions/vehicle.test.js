import C from '../../constants';
import * as cookies from '../../actions/cookie';
import * as vehicle from '../../actions/vehicle';
import { vehicleData } from '../datasets';

let vehicleDataSet = null;
beforeAll(() => {
  vehicleDataSet = vehicleData();
});

test('setup remove vehicle action object', () => {
  const action = vehicle.removeVehicle('1000');
  expect(action).toEqual({
    type: C.REMOVE_VEHICLE,
    payload: '1000',
  });
});

test('setup add vehicle action object', () => {
  const action = vehicle.addVehicle(vehicleDataSet);
  expect(action).toEqual({
    type: C.ADD_VEHICLE,
    payload: vehicleDataSet,
  });
});

test('setup preferred vehicle action object with default value', () => {
  const action = vehicle.setPreferredVehicle('You have no vehicles in your profile');
  expect(action).toEqual({
    type: C.SET_PREFERRED_VEHICLE,
    payload: 'You have no vehicles in your profile',
  });
});

test('setup Vehicle List', () => {
  const action = vehicle.setVehicleList([vehicleDataSet]);
  expect(action).toEqual({
    type: C.SET_VEHICLE_LIST,
    payload: [vehicleDataSet],
  });
});

test('remove Vehicle List', () => {
  const action = vehicle.removeVehicleList();
  expect(action).toEqual({
    type: C.REMOVE_VEHICLE_LIST,
  });
});

test('set Vehicle SortOrder', () => {
  const action = vehicle.setVehicleSortOrder('DEFAULT');
  expect(action).toEqual({
    type: C.SET_VEHICLE_SORT_ORDER,
    payload: 'DEFAULT',
  });
});

test('remove Vehicle SortOrder', () => {
  const action = vehicle.removeVehicleSortOrder('DEFAULT');
  expect(action).toEqual({
    type: C.REMOVE_VEHICLE_SORT_ORDER,
  });
});

test('Read sort order from vehicleSortOrderService', () => {
  const fakeFunc = jest.mock();
  fakeFunc.spyOn(cookies, 'readCookie').mockReturnValue('DEFAULT');
  const action = vehicle.vehicleSortOrderService();
  expect(action).toEqual({
    type: C.SET_VEHICLE_SORT_ORDER,
    payload: 'DEFAULT',
  });
});

test('Could not read sort order from vehicleSortOrderService', () => {
  const fakeFunc = jest.mock();
  fakeFunc.spyOn(cookies, 'readCookie').mockReturnValue('DE');
  const action = vehicle.vehicleSortOrderService();
  expect(action).toEqual({
    type: C.ADD_ERROR,
    payload: 'could not read cookie',
  });
});
