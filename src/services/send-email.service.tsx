import axios from 'axios'
import Service from './service.config'
import SendEmailInterface from '../interface/send-email.interface';


const service:Service = new Service();

export const sendEmail = async (form:SendEmailInterface): Promise<Array<any>> => {
    const response = await axios.post(`${service.api}/send-email`, form, service.config);
    const data = response?.data;
    return data
}
