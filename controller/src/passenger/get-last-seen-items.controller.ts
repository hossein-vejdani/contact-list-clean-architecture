import { GetLastSeenPassengersService } from '@contact-management/core'
import { GetLastSeenPassengersPresenter } from '@contact-management/infra'
export class GetLastSeenPassengersController {
    private service: GetLastSeenPassengersService
    public readonly presenter: GetLastSeenPassengersPresenter
    constructor() {
        this.presenter = new GetLastSeenPassengersPresenter()
        this.service = new GetLastSeenPassengersService(this.presenter)
    }

    getList(...args: Parameters<typeof this.service.execute>) {
        this.service.execute(...args)
    }
}
