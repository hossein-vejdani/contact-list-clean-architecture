import { IListPresenter, ISingleItemPresenter } from '../../../shared/presenter.util'
import { Passenger } from '../../domains/passenger.model'

export const PASSENGER_GET_ALL_PRESENTER_TYPE = Symbol.for('PassengerGetAllPresenter')
export interface IGetAllPassengersPresenter extends IListPresenter<Passenger> {}

export const PASSENGER_GET_ONE_PRESENTER_TYPE = Symbol.for('PassengerGetOnePresenter')
export interface IGetOnePassengerPresenter extends ISingleItemPresenter<Passenger> {}
