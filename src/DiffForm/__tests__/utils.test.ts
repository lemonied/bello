import { DiffFormTypes, Store } from '../utils';

let store: Store;

describe('Store', () => {

  beforeEach(() => {
    store = new Store();
    store.setState({
      type: DiffFormTypes.SOURCE,
      names: ['clazz'],
      value: '123',
    });
    store.setState({
      type: DiffFormTypes.SOURCE,
      names: ['list', 0, 'name'],
      value: 1,
    });

    store.setState({
      type: DiffFormTypes.TARGET,
      names: ['clazz'],
      value: '1234',
    });
    store.setState({
      type: DiffFormTypes.TARGET,
      names: ['list', 0, 'name'],
      value: 1,
    });
    store.setState({
      type: DiffFormTypes.TARGET,
      names: ['list', 1, 'name'],
      value: 2,
    });
  });

  test('store get value', () => {
    expect(store.getSnapshot({ names: ['list', 1, 'name'], type: DiffFormTypes.TARGET })?.value).toBe(2);
  });

  test('store event', () => {
    const mock = jest.fn();
    store.on(mock, {
      type: DiffFormTypes.SOURCE,
      names: ['list', 0, 'name'],
    });
    store.emit({
      type: DiffFormTypes.SOURCE,
      names: ['list', 0, 'name'],
      value: 10,
    });
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock.mock.lastCall).toEqual([
      {
        type: DiffFormTypes.SOURCE,
        names: ['list', 0, 'name'],
        value: 10,
      },
    ]);
  });

  test('get all children', () => {
    const children = store.getChildSnapshots({
      names: ['list'],
      type: DiffFormTypes.TARGET,
    });
    expect(children).toBeDefined();
    expect(Object.values(children!).length).toBe(2);
  });

  test('fuzzy event', () => {
    const mock = jest.fn();
    store.on(mock, {
      type: DiffFormTypes.SOURCE,
      fuzzy: true,
      names: ['list'],
    });
    store.emit({
      type: DiffFormTypes.SOURCE,
      names: ['clazz'],
      value: '000',
    });
    store.emit({
      type: DiffFormTypes.SOURCE,
      names: ['list', 1, 'name'],
      value: 3,
    });
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock.mock.lastCall).toEqual([
      {
        type: DiffFormTypes.SOURCE,
        names: ['list', 1, 'name'],
        value: 3,
      },
    ]);
  });

  test('uniqueKey event', () => {
    const mock = jest.fn();
    store.on(mock, {
      type: DiffFormTypes.TARGET,
      uniqueKey: ['name'],
      names: ['list'],
    });
    store.emit({
      type: DiffFormTypes.TARGET,
      names: ['list', 2, 'name'],
      value: 'test',
    });
    store.emit({
      type: DiffFormTypes.TARGET,
      names: ['list', 3, 'age'],
      value: 18,
    });
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock.mock.lastCall).toEqual([
      {
        type: DiffFormTypes.TARGET,
        names: ['list', 2, 'name'],
        value: 'test',
      },
    ]);
  });

});
