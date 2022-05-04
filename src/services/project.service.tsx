import axios from 'axios'
import Service from './service.config'
import Project from '../interfaces/project.interface';


const service:Service = new Service();

export const getProjects = async (): Promise<Project[]> => {
    const response = await axios.get(`${service.api}/projects`, service.config);
    const data:Project[] = response?.data;
    return data
}
