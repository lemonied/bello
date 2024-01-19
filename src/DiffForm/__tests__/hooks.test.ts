import { renderHook, cleanup, act, waitFor } from '@testing-library/react';
import { useDebounceFn, useDeepCompareMemo, useMemoizedFn, useNames, useNonNullConcat, usePrevious } from '../hooks';

afterEach(cleanup);

describe('useNames', () => {
  test('string to array', () => {
    const { result } = renderHook(() => useNames('name'));
    expect(result.current).toEqual(['name']);
  });

  test('arrays are not processed', () => {
    const arr = [1, 2, 3];
    const { result } = renderHook(() => useNames(arr));
    expect(result.current).toBe(arr);
  });

  test('empty array to undefined', () => {
    const { result } = renderHook(() => useNames([]));
    expect(result.current).toBeUndefined();
  });

  test('undefined to undefined', () => {
    const { result } = renderHook(() => useNames());
    expect(result.current).toBeUndefined();
  });
});

describe('usePrevious', () => {
  test('usePrevious()', () => {
    const { result, rerender } = renderHook((props?: { count: number }) => {
      return usePrevious(props?.count);
    });
    expect(result.current).toBeUndefined();
    rerender({ count: 1 });
    expect(result.current).toBeUndefined();
    rerender({ count: 1 });
    expect(result.current).toBeUndefined();
    rerender({ count: 2 });
    expect(result.current).toBe(1);
  });
});

describe('useNonNullConcat', () => {
  test('As long as one item is empty, return empty', () => {
    const { result } = renderHook(() => {
      return useNonNullConcat('name', undefined, [1]);
    });
    expect(result.current).toBeUndefined();
  });

  test('return array', () => {
    const { result } = renderHook(() => {
      return useNonNullConcat('name', ['some', 'field'], [1]);
    });
    expect(result.current).toEqual(['name', 'some', 'field', 1]);
  });
});

describe('useMemoizedFn', () => {
  test('useMemoizedFn()', () => {
    const { result, rerender } = renderHook(() => {
      return useMemoizedFn(() => {});
    });
    const fn1 = result.current;
    rerender();
    const fn2 = result.current;
    expect(fn1).toBe(fn2);
  });
});

describe('useDebounceFn', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test('useDebounceFn()', async () => {
    const mock = jest.fn();
    const { result } = renderHook(() => {
      return useDebounceFn(mock, 100);
    });
    await act(async () => {
      result.current();
      result.current();
      await waitFor(() => new Promise<void>(resolve => { window.setTimeout(resolve, 20); }));
      result.current();
      await waitFor(() => new Promise<void>(resolve => { window.setTimeout(resolve, 20); }));
      result.current();
      await waitFor(() => new Promise<void>(resolve => { window.setTimeout(resolve, 300); }));
      expect(mock).toHaveBeenCalledTimes(1);
    });
  });
});

describe('useDeepCompareMemo', () => {
  test('useDeepCompareMemo()', () => {
    const data = [1, 2, {
      name: 'Mike',
    }];
    const { result, rerender } = renderHook((props: { data: any[] }) => {
      return useDeepCompareMemo(() => {
        return props.data;
      }, [props.data]);
    }, {
      initialProps: {
        data,
      },
    });
    expect(result.current).toBe(data);
    rerender({
      data: [1, 2, {
        name: 'Mike',
      }],
    });
    expect(result.current).toBe(data);
  });
});
