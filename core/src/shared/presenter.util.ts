import { ListResponseType, SingleItemResponseType } from './repository.util'

export interface IBasePresenter {
    notifyError(err: unknown): void
}

export interface IListPresenter<T> extends IBasePresenter {
    notifySuccess(data: ListResponseType<T>): void
}

export interface ISingleItemPresenter<T> extends IBasePresenter {
    notifySuccess(data: SingleItemResponseType<T>): void
}

export interface IVoidPresenter extends IBasePresenter {
    notifySuccess(): void
}

export interface IGlobalHTTPErrorPresenter {
    notifyError(err: unknown): void
}
