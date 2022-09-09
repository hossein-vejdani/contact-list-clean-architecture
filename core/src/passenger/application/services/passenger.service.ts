import { QueryParamType } from '../../../shared/repository.util'
import { IService } from '../../../shared/service.util'
import { Passenger } from '../../domains/passenger.model'
import { IGetAllPassengersPresenter } from '../presenters/passenger.presenter'
import { IPassengerRepository } from '../repositories/passenger.repository'

export class GetAllPassengersService implements IService<IPassengerRepository, IGetAllPassengersPresenter, Passenger, 'id'> {
    repository: IPassengerRepository
    presenter: IGetAllPassengersPresenter

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
    repository: IPassengerRepository
    presenter: IGetAllPassengersPresenter

    async execute({ id }: Pick<Passenger, 'id'>) {
        try {
            const result = await this.repository.getOne(id)
            this.presenter.notifySuccess(result)
        } catch (err) {
            this.presenter.notifyError(err)
        }
    }
}
