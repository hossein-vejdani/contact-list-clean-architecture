import type { IGlobalHTTPErrorPresenter } from '@contact-management/core'

export type Subscriber<T> = (result?: T, error?: unknown) => void

export class Presenter<T> {
    protected subscribers: Map<symbol, Subscriber<T>>

    constructor() {
        this.subscribers = new Map()
    }

    protected notify(data?: T, error?: any): void {
        for (const [_, subscriber] of this.subscribers) {
            subscriber(data, error)
        }
    }

    public subscribe(subscriber: Subscriber<T>): () => void {
        const key = Symbol()
        this.subscribers.set(key, subscriber)
        return this.unsubscribe.bind(this, key)
    }

    public unsubscribe(key: symbol): void {
        this.subscribers.delete(key)
    }
}

export class GlobalHTTPErrorPresenter extends Presenter<unknown> implements IGlobalHTTPErrorPresenter {
    notifyError(err: unknown) {
        this.notify(err)
    }
}
