import { Container } from 'inversify'
import 'reflect-metadata'
export class DIContainer {
    private static instance?: Container
    static getInstance() {
        if (!this.instance) {
            this.instance = new Container()
        }
        return this.instance
    }
}
