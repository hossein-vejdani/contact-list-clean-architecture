import 'reflect-metadata'
import { IGetAllPassengersPresenter, IGetOnePassengerPresenter, Passenger } from '@contact-management/core'
import { ListResponseType, SingleItemResponseType } from '@contact-management/core/src/shared/repository.util'
import { Presenter } from '../../shared/presenter.util'

export class GetAllPassengersPresenter extends Presenter<ListResponseType<Passenger>> implements IGetAllPassengersPresenter {
    notifySuccess(data: ListResponseType<Passenger>) {
        this.notify(data)
    }

    notifyError(err: unknown) {
        this.notify(undefined, err)
    }
}

export class GetOnePassengerPresenter extends Presenter<SingleItemResponseType<Passenger>> implements IGetOnePassengerPresenter {
    notifySuccess(data: SingleItemResponseType<Passenger>) {
        this.notify(data)
    }

    notifyError(err: unknown) {
        this.notify(undefined, err)
    }
}
