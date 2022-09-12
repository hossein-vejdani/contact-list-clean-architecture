import { SearchType } from '@contact-management/core'

export interface IMapper<I, O> {
    mapFrom(param: I): O
    mapTo(param: O): I
}

export const whereMapper = <T>(where: SearchType<T>, mapper: IMapper<unknown, unknown>) => {
    return Object.entries(where).reduce((prev, [key, value]) => {
        const data = {
            ...prev,
            [key]: typeof value === 'string' ? value.trim : value
        }
        return mapper.mapFrom(data) as SearchType<T>
    }, {})
}
