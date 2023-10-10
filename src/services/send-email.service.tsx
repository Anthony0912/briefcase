import HttpClient from '../helpers/config-services/http-client.config';

import SendEmailInterface from '../interfaces/send-email.interface';
import Response from '../interfaces/response.interface'


export default class SendEmailService {
    private _httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public async sendEmail(form: SendEmailInterface) {
        const response = await this._httpClient.post<SendEmailInterface, Response<{ id: string }>>('send-email', form);
        return response.data;
    }
}
