import type { IGlobalHTTPErrorPresenter } from '@contact-management/core'
import axios, { AxiosInstance } from 'axios'
export class HttpClient {
    private static baseURL = 'http://localhost:1337'
    private static instance?: AxiosInstance
    private static errorPresenter: IGlobalHTTPErrorPresenter
    static getInstance() {
        if (!this.instance) {
            this.instance = axios.create({
                baseURL: this.baseURL
            })
            this.instance.interceptors.response.use(
                result => result,
                error => {
                    if (this.errorPresenter) {
                        this.errorPresenter.notifyError(error)
                    }
                    throw new Error(error, { cause: error })
                }
            )
        }
        return this.instance
    }

    static setErrorPresenter(errorPresenter: IGlobalHTTPErrorPresenter) {
        this.errorPresenter = errorPresenter
    }
}
