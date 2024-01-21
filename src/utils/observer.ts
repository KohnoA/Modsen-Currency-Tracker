export interface Subscriber {
  update: () => void;
}

export class Observer {
  private subscribers: Subscriber[];

  constructor() {
    this.subscribers = [];
  }

  public subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  public unsubscribe(subscriber: Subscriber) {
    this.subscribers.filter((item) => item !== subscriber);
  }

  public notify() {
    this.subscribers.forEach((subscriber) => subscriber.update());
  }
}
