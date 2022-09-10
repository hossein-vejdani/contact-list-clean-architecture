import { Passenger } from '@contact-management/core'
import { IMapper } from '../../shared/mapper.util'
import { PassengerRepositoryEntity } from './passenger.repository-entity'

export class PassengerRepositoryMapper implements IMapper<Passenger, PassengerRepositoryEntity> {
    mapFrom({ firstName: first_name, lastName: last_name, ...other }: Passenger): PassengerRepositoryEntity {
        return {
            first_name,
            last_name,
            ...other
        }
    }

    mapTo({ first_name: firstName, last_name: lastName, ...other }: PassengerRepositoryEntity): Passenger {
        return {
            firstName,
            lastName,
            ...other
        }
    }
}
