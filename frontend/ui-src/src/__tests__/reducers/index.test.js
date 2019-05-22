import * as reducer from '../../reducers';
import C from '../../constants';
import { vehicleData } from '../datasets';

let vehicleDataSet = null;
beforeAll(() => {
  vehicleDataSet = vehicleData();
});

test('should set default state', () => {
  const state = reducer.vehicleList(undefined, { type: 'init' });
  expect(state).toEqual([]);
});

test('should set vehicle list', () => {
  const currentStatelist = [];
  const newStatelist = [vehicleDataSet];
  const action = { type: C.SET_VEHICLE_LIST, payload: newStatelist };
  const state = reducer.vehicleList(currentStatelist, action);
  expect(state).toEqual(newStatelist);
});

test('should remove vehicle list', () => {
  const stateList = [vehicleDataSet];
  const action = { type: C.REMOVE_VEHICLE_LIST };
  const state = reducer.vehicleList(stateList, action);
  expect(state).toBe(null);
});

test('should add preferred vehicle', () => {
  const action = { type: C.SET_PREFERRED_VEHICLE, payload: vehicleDataSet };
  const state = reducer.preferredVehicle([], action);
  expect(state).toEqual(vehicleDataSet);
});

test('should remove preferred vehicle', () => {
  const action = { type: C.REMOVE_PREFERRED_VEHICLE };
  const state = reducer.preferredVehicle([vehicleDataSet], action);
  expect(state).toBe(null);
});

test('should set vehicle sort order', () => {
  const action = { type: C.SET_VEHICLE_SORT_ORDER, payload: C.SORT_ORDER_DSC };
  const state = reducer.vehicleSortOrder(C.SORT_ORDER_DEFAULT, action);
  expect(state).toEqual(C.SORT_ORDER_DSC);
});

test('should remove vehicle sort order', () => {
  const action = { type: C.REMOVE_VEHICLE_SORT_ORDER };
  const state = reducer.vehicleSortOrder(C.SORT_ORDER_DEFAULT, action);
  expect(state).toBe(null);
});

test('should set default sort order', () => {
  const action = { type: 'init' };
  const state = reducer.vehicleSortOrder(undefined, action);
  expect(state).toEqual(C.SORT_ORDER_DEFAULT);
});
