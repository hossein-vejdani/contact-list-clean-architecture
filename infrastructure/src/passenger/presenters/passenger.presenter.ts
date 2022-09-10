import { injectable } from 'inversify'
import 'reflect-metadata'
import { IGetAllPassengersPresenter, IGetOnePassengerPresenter, Passenger, PASSENGER_GET_ALL_PRESENTER_TYPE, PASSENGER_GET_ONE_PRESENTER_TYPE } from '@contact-management/core'
import { ListResponseType, SingleItemResponseType } from '@contact-management/core/src/shared/repository.util'
import { DIContainer } from '@contact-management/core'
import { Presenter } from '../../shared/presenter.util'

@injectable()
export class GetAllPassengersPresenter extends Presenter<ListResponseType<Passenger>> implements IGetAllPassengersPresenter {
    notifySuccess(data: ListResponseType<Passenger>) {
        this.notify(data)
    }

    notifyError(err: unknown) {
        this.notify(undefined, err)
    }
}

@injectable()
export class GetOnePassengerPresenter extends Presenter<SingleItemResponseType<Passenger>> implements IGetOnePassengerPresenter {
    notifySuccess(data: SingleItemResponseType<Passenger>) {
        this.notify(data)
    }

    notifyError(err: unknown) {
        this.notify(undefined, err)
    }
}

const container = DIContainer.getInstance()
container.bind<IGetAllPassengersPresenter>(PASSENGER_GET_ALL_PRESENTER_TYPE).to(GetAllPassengersPresenter)
container.bind<IGetOnePassengerPresenter>(PASSENGER_GET_ONE_PRESENTER_TYPE).to(GetOnePassengerPresenter)
