import { IBaseRepository } from '../../../shared/repository.util'
import { Passenger } from '../../domains/passenger.model'

export interface IPassengerRepository extends IBaseRepository<Passenger, 'id'> {}
