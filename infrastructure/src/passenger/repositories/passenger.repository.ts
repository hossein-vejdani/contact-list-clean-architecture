import { injectable } from 'inversify'
import 'reflect-metadata'
import { IPassengerRepository, Passenger, PASSENGER_REPOSITORY_TYPE } from '@contact-management/core'
import { QueryParamType, ListResponseType, SingleItemResponseType } from '@contact-management/core/src/shared/repository.util'
import { HttpClient } from '../../shared/clients/http/http.client'
import { PassengerRepositoryMapper } from './passenger.repository-mapper'
import { DIContainer } from '@contact-management/core/src/container'
import { whereMapper } from '../../shared/mapper.util'
import { LocalStorageClient } from '../../shared/clients/local-storage/localStorage.client'

@injectable()
export class PassengerRepository implements IPassengerRepository {
    private readonly route = 'passenger'
    private readonly http = HttpClient.getInstance()
    private readonly mapper = new PassengerRepositoryMapper()

    async getAll({ where, ...queryParams }: QueryParamType<Passenger>): Promise<ListResponseType<Passenger>> {
        if (where) where = whereMapper<Passenger>(where, this.mapper)
        const {
            data: { meta, items }
        } = await this.http.get(this.route, {
            params: {
                ...queryParams,
                where
            }
        })
        return {
            meta,
            items: items.map(this.mapper.mapTo)
        }
    }

    async getOne(key: number): Promise<SingleItemResponseType<Passenger>> {
        const { data } = await this.http.get(`${this.route}/${key}`)
        const result = this.mapper.mapTo(data)
        const LS = LocalStorageClient.getInstance<Passenger[]>(this.route)
        const lastResults = LS.getData() || []

        if (!lastResults.some(item => item.id === result.id)) {
            if (lastResults.length > 4) {
                lastResults.pop()
            }
            LS.setData([result, ...lastResults])
        }

        return result
    }

    getLastSeenPassengers(): Passenger[] {
        return LocalStorageClient.getInstance<Passenger[]>(this.route).getData()
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
