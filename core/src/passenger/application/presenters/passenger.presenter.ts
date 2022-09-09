import { IListPresenter } from '../../../shared/presenter.util'
import { Passenger } from '../../domains/passenger.model'

export interface IGetAllPassengersPresenter extends IListPresenter<Passenger> {}
