import { IBaseModel } from '../../shared/model.util'

export interface Passenger extends IBaseModel {
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    note: string
    telegram: string
    avatar: string
    company: string
    address: string
}
