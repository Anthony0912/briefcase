import axios, { AxiosRequestConfig } from 'axios';

import Service from './config-url.config';

export default class HttpClient {


    private header: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('authorization')! ?? '',
        },
    };

    private _service: Service;

    constructor() {
        this._service = new Service();
    }

    public async get(url: string) {
        const response = await axios.get(`${this._service.api}/${url}`, this.header);
        return response;
    }

    public async post<T, D>(url: string, data: T) {
        const response = await axios.post<D>(`${this._service.api}/${url}`, data, this.header);
        return response;
    }
}