import { IBasePresenter, IListPresenter, ISingleItemPresenter } from '../../../shared/presenter.util'
import { Passenger } from '../../domains/passenger.model'

export interface IGetAllPassengersPresenter extends IListPresenter<Passenger> {}

export interface IGetOnePassengerPresenter extends ISingleItemPresenter<Passenger> {}

export interface IGetLastSeenPassengersPresenter extends IBasePresenter {
    notifySuccess(data: Passenger[]): void
}
