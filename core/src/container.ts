import { Container } from 'inversify'

export class DIContainer {
    private static instance?: Container
    static getInstance() {
        if (!this.instance) {
            this.instance = new Container()
        }
        return this.instance
    }
}
