import { environment } from "../environments/environment";

export default class Service {

  private stateEnvironment: string[] = ['production', 'development', 'testing'];

  public api: string = this.getStateEnvironment();
  public config: any

  constructor() {
    this.config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('authorization')! ?? '',
      },
    }
  }

  private getStateEnvironment(): string {
    switch (environment.APP_ENVIRONMENT) {
      case this.stateEnvironment[0]:
        return environment.PROD_URL_API;
      case this.stateEnvironment[1]:
        return environment.DEV_URL_API;
      case this.stateEnvironment[2]:
        return environment.TEST_URL_API;
      default:
        return '';
    }
  }
}
