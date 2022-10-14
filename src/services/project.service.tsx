import HttpClient from '../helpers/config-services/http-client.config';

import Project from '../interfaces/project.interface';

export default class ProjectService {
    
    private _httpClient: HttpClient
    
    constructor(httpClient: HttpClient) { 
        this._httpClient = httpClient;
    }

    public async getProjects(): Promise<Project[]> {
        const response = await this._httpClient.get('projects');
        const data: Project[] = response?.data;
        return data
    }

    public async getProjectsExperience(): Promise<Project[]> {
        const response = await this._httpClient.get('projects-experience');
        const data: Project[] = response?.data;
        return data
    }

}
