export type SortWaysType = 'ASC' | 'DESC'
export type SortColumnsType = 'id' | 'createdAt' | 'updatedAt'

export type SingleSortType = `${SortColumnsType} ${SortWaysType}`
export type GroupSortType = {
    [P in SortColumnsType]: SortWaysType
}[]

export type SearchType<T> = {
    [K in keyof T]?: {
        contains: T[K]
    }
}

export type QueryParamType<T> = {
    skip?: number
    limit?: number
    sort?: SingleSortType | GroupSortType
    where?: SearchType<T>
}

export type ListResponseType<T> = {
    meta: {
        skipped: number
        limit: number
        total: number
        criteria: SearchType<T>
    }
    items: T[]
}

export type SingleItemResponseType<T> = {
    meta: {
        skipped: number
        limit: number
        total: number
        criteria: SearchType<T>
    }
    items: T[]
}

export interface IRepository<T, Key extends keyof T> {
    // query
    getAll(queryParams: QueryParamType<T>): Promise<ListResponseType<T>>
    get(key: Key): Promise<SingleItemResponseType<T>>

    // command
    create(data: Omit<T, Key>): Promise<SingleItemResponseType<T>>
    update(data: T): Promise<SingleItemResponseType<T>>
    delete(id: T[Key]): Promise<void>
}
