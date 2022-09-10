import { IBaseRepositoryEntity } from '../../shared/repository.util'

export interface PassengerRepositoryEntity extends IBaseRepositoryEntity {
    first_name: string
    last_name: string
    email: string
    gender: string
    phone: string
    note: string
    telegram: string
    avatar: string
    company: string
    address: string
}
