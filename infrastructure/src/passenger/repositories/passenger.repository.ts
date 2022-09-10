import { injectable } from 'inversify'
import 'reflect-metadata'
import { IPassengerRepository, Passenger, PASSENGER_REPOSITORY_TYPE } from '@contact-management/core'
import { QueryParamType, ListResponseType, SingleItemResponseType } from '@contact-management/core/src/shared/repository.util'
import { HttpClient } from '../../shared/clients/http.client'
import { PassengerRepositoryMapper } from './passenger.repository-mapper'
import { DIContainer } from '@contact-management/core/src/container'

@injectable()
export class PassengerRepository implements IPassengerRepository {
    private readonly route = 'passenger'
    private readonly http = HttpClient.getInstance()
    private readonly mapper = new PassengerRepositoryMapper()

    async getAll(queryParams: QueryParamType<Passenger>): Promise<ListResponseType<Passenger>> {
        const {
            data: { meta, items }
        } = await this.http.get(this.route, {
            params: queryParams
        })
        return {
            meta,
            items: items.map(this.mapper.mapTo)
        }
    }

    async getOne(key: number): Promise<SingleItemResponseType<Passenger>> {
        const { data } = await this.http.get(`${this.route}/${key}`)
        return this.mapper.mapTo(data)
    }

    create(): Promise<SingleItemResponseType<Passenger>> {
        throw new Error('Method not implemented.')
    }

    update(): Promise<SingleItemResponseType<Passenger>> {
        throw new Error('Method not implemented.')
    }

    delete(): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
const container = DIContainer.getInstance()
container.bind<IPassengerRepository>(PASSENGER_REPOSITORY_TYPE).to(PassengerRepository)
