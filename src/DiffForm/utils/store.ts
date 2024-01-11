import { escapeRegExp, pickBy } from 'lodash';
import type { DiffFormTypes, NamePaths } from './model';

export interface StoreValue {
  type: DiffFormTypes;
  names: NamePaths;
  value?: any;
}

export interface StoreEvent extends StoreValue {
  remove?: boolean;
}

export interface Subscriber extends Pick<StoreValue, 'type' | 'names'> {
  callback: (storeEvent: StoreEvent) => void;
  key: string;
  /**
   * @description 是否为模糊匹配
   */
  fuzzy?: boolean;
  /**
   * @description 是否监听符合uniqueKey的所有值变化
   */
  uniqueKey?: NamePaths;
}

export class Store {

  private state: Record<string, StoreValue> = {};

  private subscribers: Subscriber[] = [];

  static keySplit = '_DIFF_FORM_STORE_KEY_SPLIT_';

  static join(list: (string| number)[]) {
    return list.join(Store.keySplit);
  }

  static updateState(snapshots: Record<string, StoreValue>, storeEvent: StoreEvent) {
    const label = Store.join([storeEvent.type, ...storeEvent.names]);
    if (storeEvent.remove) {
      delete snapshots[label];
    } else {
      snapshots[label] = storeEvent;
    }
    return snapshots;
  }

  setState(storeValue: StoreValue) {
    Store.updateState(this.state, storeValue);
  }

  getSnapshots() {
    return this.state;
  }

  getSnapshot(options: Partial<Pick<StoreValue, 'names' | 'type'>>) {
    const { names, type } = options;
    if (names && type) {
      return this.state[
        Store.join([type, ...names])
      ];
    }
  }

  getUniqueFieldsSnapshots(options: Partial<Pick<StoreValue, 'names' | 'type'> & { uniqueKey: NamePaths }>) {
    const { names, type, uniqueKey } = options;
    if (names && type && uniqueKey) {
      return pickBy(this.state, (_, key) => {
        return new RegExp(`^${Store.join([
          Store.join([type, ...names]),
          '\\d',
          Store.join(uniqueKey),
        ])}$`).test(key);
      });
    }
  }

  getChildSnapshots(options: Partial<Pick<StoreValue, 'names' | 'type'>>) {
    const { names, type } = options;
    if (names && type) {
      const label = Store.join([type, ...names]);
      return pickBy(this.state, (_, key) => key.startsWith(label));
    }
  }

  emit(storeEvent: StoreEvent) {
    const label = Store.join([storeEvent.type, ...storeEvent.names]);
    this.setState(storeEvent);
    for (const subscriber of this.subscribers) {
      if (
        (subscriber.fuzzy && label.startsWith(subscriber.key)) ||
        (subscriber.uniqueKey && new RegExp(`^${Store.join([
          escapeRegExp(subscriber.key),
          '\\d',
          escapeRegExp(Store.join(subscriber.uniqueKey)),
        ])}$`).test(label)) ||
        label === subscriber.key
      ) {
        subscriber.callback(storeEvent);
      }
    }
  }

  /**
   * @description 注册订阅
   */
  on(
    callback: Subscriber['callback'],
    options: Omit<Subscriber, 'callback' | 'key'>,
  ) {
    const key = Store.join([options.type, ...options.names]);
    const subscriber: Subscriber = {
      ...options,
      key,
      callback,
    };
    this.subscribers.push(subscriber);
    return () => {
      const index = this.subscribers.indexOf(subscriber);
      if (index > -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }

}
