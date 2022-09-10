import { GetOnePassengerService } from '@contact-management/core'
import { GetOnePassengerPresenter } from '@contact-management/infra'
export class GetOnePassengerController {
    private service: GetOnePassengerService
    public readonly presenter: GetOnePassengerPresenter
    constructor() {
        this.presenter = new GetOnePassengerPresenter()
        this.service = new GetOnePassengerService(this.presenter)
    }

    getOne(...args: Parameters<typeof this.service.execute>) {
        this.service.execute(...args)
    }
}
