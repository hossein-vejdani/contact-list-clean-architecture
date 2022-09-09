import { QueryParamType } from '../../../shared/repository.util'
import { IService } from '../../../shared/service.util'
import { Passenger } from '../../domains/passenger.model'
import { IGetAllPassengersPresenter, IGetOnePassengerPresenter, PASSENGER_GET_ALL_PRESENTER_TYPE, PASSENGER_GET_ONE_PRESENTER_TYPE } from '../presenters/passenger.presenter'
import { IPassengerRepository, PASSENGER_REPOSITORY_TYPE } from '../repositories/passenger.repository'
import { inject, injectable } from 'inversify'

@injectable()
export class GetAllPassengersService implements IService<IPassengerRepository, IGetAllPassengersPresenter, Passenger, 'id'> {
    constructor(@inject(PASSENGER_REPOSITORY_TYPE) readonly repository: IPassengerRepository, @inject(PASSENGER_GET_ALL_PRESENTER_TYPE) readonly presenter: IGetAllPassengersPresenter) {}

    async execute(queryParams: QueryParamType<Passenger>) {
        try {
            const result = await this.repository.getAll(queryParams)
            this.presenter.notifySuccess(result)
        } catch (err) {
            this.presenter.notifyError(err)
        }
    }
}

export class GetOnePassengerService implements IService<IPassengerRepository, IGetAllPassengersPresenter, Passenger, 'id'> {
    constructor(@inject(PASSENGER_REPOSITORY_TYPE) readonly repository: IPassengerRepository, @inject(PASSENGER_GET_ONE_PRESENTER_TYPE) readonly presenter: IGetOnePassengerPresenter) {}

    async execute({ id }: Pick<Passenger, 'id'>) {
        try {
            const result = await this.repository.getOne(id)
            this.presenter.notifySuccess(result)
        } catch (err) {
            this.presenter.notifyError(err)
        }
    }
}
