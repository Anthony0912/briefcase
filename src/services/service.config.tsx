import { environment } from "../environments/environment";

export default class Service {
  public api: string;
  public config: any

  constructor() {
    this.api = environment.APP_ENVIROMENT === 'development' ?
    environment.DEV_URL_API : environment.APP_ENVIROMENT === 'production' ? 
    environment.PROD_URL_API : environment.TEST_URL_API;
    this.config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('authorization')! ?? '',
      },
    }
  }
}
