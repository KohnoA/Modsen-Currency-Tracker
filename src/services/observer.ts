export interface Subscriber<T> {
  update: (data: T) => void;
}

export class Observer<T> {
  private subscribers: Set<Subscriber<T>>;

  constructor() {
    this.subscribers = new Set();
  }

  public subscribe(subscriber: Subscriber<T>) {
    this.subscribers.add(subscriber);
  }

  public unsubscribe(subscriber: Subscriber<T>) {
    this.subscribers.delete(subscriber);
  }

  public notify(data: T) {
    this.subscribers.forEach((subscriber) => subscriber.update(data));
  }
}
