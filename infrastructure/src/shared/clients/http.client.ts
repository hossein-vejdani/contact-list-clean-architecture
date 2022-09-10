import axios, { AxiosInstance } from 'axios'
export class HttpClient {
    private static baseURL = 'http://localhost:1337'
    private static instance?: AxiosInstance
    static getInstance() {
        if (!this.instance) {
            this.instance = axios.create({
                baseURL: this.baseURL
            })
        }
        return this.instance
    }
}
