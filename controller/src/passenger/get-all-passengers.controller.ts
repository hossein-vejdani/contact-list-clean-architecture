import { GetAllPassengersService } from '@contact-management/core'
import { GetAllPassengersPresenter } from '@contact-management/infra'

export class GetAllPassengersController {
    service: GetAllPassengersService
    public readonly presenter: GetAllPassengersPresenter
    constructor() {
        this.presenter = new GetAllPassengersPresenter()
        this.service = new GetAllPassengersService(this.presenter)
    }

    getAll(...args: Parameters<typeof this.service.execute>) {
        this.service.execute(...args)
    }
}
