import { ListResponseType, SingleItemResponseType } from './repository.util'

interface IBasePresenter {
    notifyError(err: any): void
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
