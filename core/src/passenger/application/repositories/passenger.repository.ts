import { IBaseRepository } from '../../../shared/repository.util'
import { Passenger } from '../../domains/passenger.model'

export const PASSENGER_REPOSITORY_TYPE = Symbol.for('PassengerRepository')
export interface IPassengerRepository extends IBaseRepository<Passenger, 'id'> {
    getLastSeenPassengers(): Passenger[]
}
