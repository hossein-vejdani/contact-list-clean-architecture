import { ListResponseType, SingleItemResponseType } from './repository.util'

interface IBasePresenter {
    notifyError(err: any)
}

export interface IListPresenter<T> extends IBasePresenter {
    notifySuccess(data: ListResponseType<T>)
}

export interface ISingleItemPresenter<T> extends IBasePresenter {
    notifySuccess(data: SingleItemResponseType<T>)
}

export interface IVoidPresenter<T> extends IBasePresenter {
    notifySuccess()
}
