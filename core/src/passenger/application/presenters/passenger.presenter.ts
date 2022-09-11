import { IListPresenter, ISingleItemPresenter } from '../../../shared/presenter.util'
import { Passenger } from '../../domains/passenger.model'

export interface IGetAllPassengersPresenter extends IListPresenter<Passenger> {}

export interface IGetOnePassengerPresenter extends ISingleItemPresenter<Passenger> {}
