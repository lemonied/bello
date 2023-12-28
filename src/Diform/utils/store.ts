import { escapeRegExp, pickBy } from 'lodash';
import type { NamePaths, StatusInfo } from './model';
import type { DiformTypes } from './constants';
import { _isEqual } from './common';

export interface StoreValue {
  type: DiformTypes;
  names: NamePaths;
  value?: any;
  statusInfo?: StatusInfo;
  remove?: boolean;
}

export interface Subscriber extends Pick<StoreValue, 'type' | 'names'> {
  callback: (storeValue: StoreValue) => void;
  key: string;
  /**
   * @description 是否为模糊匹配
   */
  fuzzy?: boolean;
  /**
   * @description 是否监听符合uniqueKey的所有值变化
   */
  uniqueKey?: NamePaths;
  /**
   * @description 是否只在value发生变化时触发订阅
   */
  onlyValue?: boolean;
}

export class Store {

  private state: Record<string, StoreValue> = {};

  private subscribers: Subscriber[] = [];

  static keySplit = '_DIFORM_STORE_KEY_SPLIT_';

  static join(list: (string| number)[]) {
    return list.join(Store.keySplit);
  }

  static updateState(snapshots: Record<string, StoreValue>, snapshot: StoreValue) {
    const label = [snapshot.type, ...snapshot.names].join(Store.keySplit);
    if (snapshot.remove) {
      delete snapshots[label];
    } else {
      snapshots[label] = snapshot;
    }
    return snapshots;
  }

  setState(storeValue: StoreValue) {
    Store.updateState(this.state, storeValue);
  }

  getSnapshots() {
    return this.state;
  }

  getSnapshot(options: Partial<Pick<Subscriber, 'names' | 'type'>>) {
    const { names, type } = options;
    if (names && type) {
      return this.state[
        [type, ...names].join(Store.keySplit)
      ];
    }
  }

  getUniqueFieldsSnapshots(options: Partial<Pick<Subscriber, 'names' | 'type' | 'uniqueKey'>>) {
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

  getChildSnapshots(options: Partial<Pick<Subscriber, 'names' | 'type'>>) {
    const { names, type } = options;
    if (names && type) {
      const label = Store.join([type, ...names]);
      return pickBy(this.state, (_, key) => key.startsWith(label));
    }
  }

  emit(storeValue: StoreValue) {
    const label = Store.join([storeValue.type, ...storeValue.names]);
    const preStoreValue = this.state[label];
    this.setState(storeValue);
    for (const subscriber of this.subscribers) {
      if (subscriber.onlyValue && !storeValue.remove && preStoreValue && _isEqual(storeValue.value, preStoreValue.value)) {
        continue;
      }
      if (
        (subscriber.fuzzy && label.startsWith(subscriber.key)) ||
        (subscriber.uniqueKey && new RegExp(`^${Store.join([
          escapeRegExp(subscriber.key),
          '\\d',
          escapeRegExp(Store.join(subscriber.uniqueKey)),
        ])}$`).test(label)) ||
        label === subscriber.key
      ) {
        subscriber.callback(storeValue);
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
    const key = [options.type, ...options.names].join(Store.keySplit);
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
