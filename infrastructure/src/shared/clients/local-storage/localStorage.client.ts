class LocalStorage<T> {
    private key: string
    constructor(key: string) {
        this.key = key
    }
    public setData(rawData: T) {
        let data: T | string = rawData
        if (typeof data === 'object') data = JSON.stringify(rawData)
        localStorage.setItem(this.key, data as string)
        console.log('*-')
    }
    public getData(): T {
        const rawData = localStorage.getItem(this.key) || ''
        console.log(rawData)
        try {
            const data = JSON.parse(rawData)
            return data
        } catch (e) {
            return rawData as T
        }
    }
}

export class LocalStorageClient {
    private static instances: Map<string, LocalStorage<unknown>> = new Map()
    static getInstance<T>(key: string) {
        if (!this.instances.has(key)) {
            this.instances.set(key, new LocalStorage<T>(key))
        }
        return this.instances.get(key) as LocalStorage<T>
    }
}
