import { QueryParamType } from '../../../shared/repository.util'
import { IService } from '../../../shared/service.util'
import { Passenger } from '../../domains/passenger.model'
import type { IGetAllPassengersPresenter, IGetLastSeenPassengersPresenter, IGetOnePassengerPresenter } from '../presenters/passenger.presenter'
import { type IPassengerRepository, PASSENGER_REPOSITORY_TYPE } from '../repositories/passenger.repository'
import { DIContainer } from '../../../container'

export class GetAllPassengersService implements IService {
    private repository: IPassengerRepository

    presenter: IGetAllPassengersPresenter

    constructor(presenter: IGetAllPassengersPresenter) {
        this.repository = DIContainer.getInstance().get(PASSENGER_REPOSITORY_TYPE)
        this.presenter = presenter
    }

    async execute(queryParams: QueryParamType<Passenger>) {
        try {
            const result = await this.repository.getAll(queryParams)
            this.presenter.notifySuccess(result)
        } catch (err) {
            console.log(this.repository)

            this.presenter.notifyError(err)
        }
    }
}

export class GetOnePassengerService implements IService {
    private repository: IPassengerRepository

    private readonly presenter: IGetOnePassengerPresenter

    constructor(presenter: IGetOnePassengerPresenter) {
        this.repository = DIContainer.getInstance().get(PASSENGER_REPOSITORY_TYPE)
        this.presenter = presenter
    }

    async execute({ id }: Pick<Passenger, 'id'>) {
        try {
            const result = await this.repository.getOne(id)
            this.presenter.notifySuccess(result)
        } catch (err) {
            this.presenter.notifyError(err)
        }
    }
}

export class GetLastSeenPassengersService implements IService {
    private repository: IPassengerRepository

    private readonly presenter: IGetLastSeenPassengersPresenter

    constructor(presenter: IGetLastSeenPassengersPresenter) {
        this.repository = DIContainer.getInstance().get(PASSENGER_REPOSITORY_TYPE)
        this.presenter = presenter
    }

    async execute() {
        try {
            const result = await this.repository.getLastSeenPassengers()
            this.presenter.notifySuccess(result)
        } catch (err) {
            this.presenter.notifyError(err)
        }
    }
}
