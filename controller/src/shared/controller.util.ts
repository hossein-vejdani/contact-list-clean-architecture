import { GlobalHTTPErrorPresenter, HttpClient } from '@contact-management/infra'

export class GlobalHTTPErrorController {
    public readonly presenter: GlobalHTTPErrorPresenter
    constructor() {
        this.presenter = new GlobalHTTPErrorPresenter()
        HttpClient.setErrorPresenter(this.presenter)
    }
}
