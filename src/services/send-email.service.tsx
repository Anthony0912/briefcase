import HttpClient from '../helpers/config-services/http-client.config';
import ResponseSendGrid from '../interfaces/response-send-grid.interface';

import SendEmailInterface from '../interfaces/send-email.interface';


export default class SendEmailService {
    private _httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public async sendEmail(form: SendEmailInterface): Promise<ResponseSendGrid> {
        const response = await this._httpClient.post('send-email', form);        
        const data: ResponseSendGrid = response.data[0];        
        return data
    }
}
